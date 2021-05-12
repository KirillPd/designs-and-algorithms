import {Pages} from "../pages";
import {Item} from "../item";

export class Comics extends Item {
  private pages: Pages;
  private readonly title: string;
  private readonly author: string;
  private readonly artist: string;

  constructor(title: string, author: string, artist: string, pages: Pages) {
    super();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.artist = artist;
  }

  toString() {
    return `Comics: ${this.title} by ${this.author}, the artist is ${this.artist}, number of pages: ${this.pages.getPages().length},`;
  }
}
