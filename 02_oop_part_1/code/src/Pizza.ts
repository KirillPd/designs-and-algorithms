import { Consumable } from './Consumable';

export class Pizza extends Consumable {
  constructor(numberOfSlices: number, spoiled: boolean) {
    super('slice of the pizza', 10, 3, spoiled);
    if (numberOfSlices < 1) {
      throw Error('numberOfSlices must be greater than zero!')
    }
    this.numberOfSlices = numberOfSlices;
  }

  private slicesEaten: number = 0;
  private readonly numberOfSlices: number;

  public eat() {
    let message = this.use();

    if (this.isConsumed) {
      return message;
    }

    this.slicesEaten++;
    if (this.slicesEaten === this.numberOfSlices) {
      this.consumed = true;
    }

    return message;
  }
}