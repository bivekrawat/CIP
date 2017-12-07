import { CIPPage } from './app.po';

describe('cip App', () => {
  let page: CIPPage;

  beforeEach(() => {
    page = new CIPPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
