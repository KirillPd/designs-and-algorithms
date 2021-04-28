import { Page } from "../page";

export const PagesIterableMixin = (superclass: any) => class extends superclass {
  [Symbol.iterator]() {
    const pages = this.pages.getPages().map((page: Page) => {
      const pageToString = page.toString();
      page.toString = () => `${this.toString()} ${pageToString}`;
      return page;
    });
    let index = 0;
    return {
      next: () => {
        return {
          key: pages[index],
          value: pages[index],
          done: ++index >= pages.length
        };
      }
    }
  }
}