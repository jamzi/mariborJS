import { MariborJSPage } from './app.po';

describe('maribor-js App', () => {
  let page: MariborJSPage;

  beforeEach(() => {
    page = new MariborJSPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
