import { Comparable } from './Comparable';

let id = 0;

export abstract class Item implements Comparable<Item> {
    private readonly _id: number;
    private _value: number;
    private _name: string;
    private _weight: number;

    protected constructor(name: string, value: number, weight: number) {
        this._id++;
        this.name = name;
        this.value = value;
        this.weight = weight;
    }

    public static reset(): number {
        id = 0;
        return id;
    }

    get id() {
        return this._id;
    }

    set value(value: number) {
        this._value = value;
    }

    get value() {
        return this._value;
    }

    set name(name: string) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set weight(weight: number) {
        this._weight = weight;
    }

    get weight() {
        return this._weight;
    }

    private compareValues(other: Item): number {
        const otherValue = other.value;

        if (this._value > otherValue) {
            return 1;
        }

        if (this._value < otherValue) {
            return -1;
        }

        return 0;
    }

    private compareNames(other: Item): number {
        const otherName = other.name.toLowerCase();
        const currentName = this._name.toLowerCase();

        if (currentName > otherName) {
            return 1;
        }

        if (currentName < otherName) {
            return -1;
        }

        return 0;
    }

    public compareTo(other: Item): number {
        const valuesComparison = this.compareValues(other);

        if (valuesComparison !== 0) {
            return valuesComparison;
        }

        return this.compareNames(other);
    }

    public toString() {
        const { _name, _value, _weight } = this;
        return `${_name} - Value: ${_value}, Weight: ${_weight}`
    }

    public use() {
        throw Error('Child class must implement this method!');
    }
}
