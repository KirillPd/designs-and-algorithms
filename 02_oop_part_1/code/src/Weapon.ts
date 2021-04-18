import { Item } from './Item';

export abstract class Weapon extends Item {
  public static readonly MODIFIER_CHANGE_RATE = 0.05;

  protected readonly _baseDamage: number;
  protected _damageModifier: number = 0;
  private readonly _baseDurability: number;
  private _durabilityModifier: number = Weapon.MODIFIER_CHANGE_RATE;

  constructor(name: string, baseDamage: number, baseDurability: number, value: number, weight: number) {
    super(name, value, weight)
    this._baseDamage = baseDamage;
    this._baseDurability = baseDurability;
  }

  get durability() {
    return this._baseDurability + this._durabilityModifier;
  }

  protected calculateBoostedDamage(modifier: number ) {
    return this._baseDamage + modifier;
  }

  get damage() {
    return this.calculateBoostedDamage(this._damageModifier);
  }

  public toString() {
    const durability = this.durability > 0 ? (this.durability * 100).toFixed(2) : 0;
    return `${super.toString()}, Damage: ${this.damage}, Durability: ${durability}%`;
  }

  public isBroken() {
    return this.durability <= 0;
  }

  public use() {
    if (this.isBroken()) {
      return console.log(`You can't use the ${this.name}, it is broken.`)
    }

    this._durabilityModifier -= Weapon.MODIFIER_CHANGE_RATE;

    const brokenMessage = this.isBroken() ? ` The ${this.name} breaks.` : '';

    console.log(`
      You use the ${this.name}, dealing ${this.damage.toFixed(2)} points of damage.${brokenMessage}
    `);
  }

  public polish() {
    throw Error('Child class must implement this method!');
  }
}