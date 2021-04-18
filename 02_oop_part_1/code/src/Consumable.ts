import { Item } from './Item';

export class Consumable extends Item {
  constructor(name: string, value: number, weight: number, spoiled: boolean) {
    super(name, value, weight);
    this._spoiled = spoiled;
  }

  private readonly _spoiled: boolean;
  private _consumed: boolean;

  get isSpoiled() {
    return this._spoiled;
  }

  get isConsumed() {
    return this._consumed;
  }

  set consumed(value: boolean) {
    this._consumed = value;
  }

  public use () {
    if(this._consumed && this._spoiled) {
      return `The ${this.name} can't be used!`
    }

    return this.eat();
  }

  public eat() {
    if (this._consumed) {
      return `There is nothing left of the ${this.name} to consume.`
    }

    const sickMessage = this._spoiled ? '\nYou feel sick.' : '';

    return `You eat the ${this.name}.${sickMessage}`
  }
}