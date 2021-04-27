import { Item } from './Item';
import { ItemComparator } from './ItemComparator';

export class Inventory {
  private items: Item[] = [];

  public addItem(item: Item): void {
    this.items.push(item);
  }

  public sort(): void;
  public sort(comparator: ItemComparator): void;
  public sort(comparator?: ItemComparator): void {
    if (comparator) {
      this.items.sort(comparator.compare);
    } else {
      // In task requirement, we should compare items by value, but I think this is what we need here :D
      // Under the hood, it compares items by names In case if values are identical.
      this.items.sort((a, b) => a.compareTo(b))
    }
  }

  public toString() {
    return `${this.items.map(item => item.toString()).join(', ')}`;
  }
}
