import { PlantsAngularCliPage } from './app.po';

describe('plants-angular-cli App', function() {
  let page: PlantsAngularCliPage;

  beforeEach(() => {
    page = new PlantsAngularCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
