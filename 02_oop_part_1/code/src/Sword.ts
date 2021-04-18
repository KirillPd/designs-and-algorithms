import { Weapon } from './Weapon';

export class Sword extends Weapon {
  constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
    super('sword', baseDamage, baseDurability, value, weight);
  }

  public polish() {
    const maxDamageBoost = this._baseDamage + (this._baseDamage / 100 * 25);
    const boostedDamage = this.calculateBoostedDamage(this._damageModifier + Weapon.MODIFIER_CHANGE_RATE);

    // TODO: Handle a case when boostedDamage is 10.99 and maxDamageBoost is 11
    if (boostedDamage < maxDamageBoost) {
      this._damageModifier += Weapon.MODIFIER_CHANGE_RATE;
    } else {
      console.log(`The ${this.name} is greatly polished. Stop doing that!`)
    }
  }
}