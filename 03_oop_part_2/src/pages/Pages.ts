import { Page } from '../page';

export class Pages {
  private readonly pages: Page[];

  constructor(pages: Page[]) {
    this.pages = pages;
  }

  getPages() {
    return this.pages;
  }
}