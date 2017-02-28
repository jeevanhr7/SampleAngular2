import { SampleAngular2Page } from './app.po';

describe('sample-angular2 App', function() {
  let page: SampleAngular2Page;

  beforeEach(() => {
    page = new SampleAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rb works!');
  });
});
