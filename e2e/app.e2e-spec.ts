import { TogetherCreativePage } from './app.po';

describe('together-creative App', () => {
  let page: TogetherCreativePage;

  beforeEach(() => {
    page = new TogetherCreativePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
