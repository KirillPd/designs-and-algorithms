import { Pages } from '../pages';
import { Item } from '../item';

export class Magazine extends Item {
  private pages: Pages;
  private readonly title: string;

  constructor(title: string, pages: Pages) {
    super();
    this.title = title;
    this.pages = pages;
  }

  toString() {
    return `Magazine: ${this.title} with number of pages: ${this.pages.getPages().length},`;
  }
}
