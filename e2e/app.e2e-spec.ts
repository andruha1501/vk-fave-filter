import { SortPostsPage } from './app.po';

describe('sort-posts App', () => {
  let page: SortPostsPage;

  beforeEach(() => {
    page = new SortPostsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
