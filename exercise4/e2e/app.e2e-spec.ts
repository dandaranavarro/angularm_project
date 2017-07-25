import { Exercise4Page } from './app.po';

describe('exercise4 App', () => {
  let page: Exercise4Page;

  beforeEach(() => {
    page = new Exercise4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
