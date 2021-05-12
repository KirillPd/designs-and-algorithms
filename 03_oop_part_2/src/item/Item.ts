import { PagesIterableMixin } from '../mixins';

export abstract class Item extends PagesIterableMixin(Object) {
  abstract toString(): string;
}
