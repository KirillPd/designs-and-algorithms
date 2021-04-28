import { Item } from '../item';
import { Pages } from '../pages';

export class Book extends Item {
  private pages: Pages;
  private readonly title: string;
  private readonly author: string;

  constructor(title: string, author: string, pages: Pages) {
    super();
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  toString() {
    return `Book: ${this.title} by ${this.author} with number of pages: ${this.pages.getPages().length},`;
  }
}