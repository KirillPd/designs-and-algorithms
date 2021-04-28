import {Page} from '../src/page';

describe('Page', () => {
  it('toString should return correct value', () => {
    // With some content is not valid value by requirements
    // @ts-ignore
    const page = new Page(3, 'with some content', 'paper');

    expect(page.toString()).toEqual('here is page with some content #3 and it\'s material is paper');
  });
});
