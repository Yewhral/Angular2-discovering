import { DiscoveryPage } from './app.po';

describe('discovery App', function() {
  let page: DiscoveryPage;

  beforeEach(() => {
    page = new DiscoveryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
