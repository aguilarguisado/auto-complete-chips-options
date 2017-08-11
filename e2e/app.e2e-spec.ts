import { MaterializeChipsOptionsPage } from './app.po';

describe('materialize-chips-options App', () => {
  let page: MaterializeChipsOptionsPage;

  beforeEach(() => {
    page = new MaterializeChipsOptionsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
