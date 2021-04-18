import { Weapon } from './Weapon';

export class Bow extends Weapon {
  constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
    super('bow', baseDamage, baseDurability, value, weight);
  }

  public polish() {
    const maxDamageBoost = 1;
    const boostedDamage = this.calculateBoostedDamage(this._damageModifier + Weapon.MODIFIER_CHANGE_RATE);

    // TODO: Handle a case when boostedDamage is 10.99 and maxDamageBoost is 11
    if (boostedDamage < maxDamageBoost) {
      this._damageModifier += Weapon.MODIFIER_CHANGE_RATE;
    } else {
      console.log(`The ${this.name} is greatly polished. Stop doing that!`)
    }
  }
}