import { Item } from './Item';
import { ItemComparator } from './ItemComparator';

export class ItemWeightComparator implements ItemComparator {
    private static compareWeight(first: Item, second: Item) {
        if (first.weight > second.weight) {
            return 1;
        }

        if (first.weight < second.weight) {
            return -1;
        }

        return 0;
    }

    public compare(first: Item, second: Item) {
        const weightComparison = ItemWeightComparator.compareWeight(first, second);

        if (weightComparison !== 0) {
            return weightComparison;
        }

        return first.compareTo(second);
    }
}
