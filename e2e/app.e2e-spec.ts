import { AngulareduxTodoPage } from './app.po';

describe('angularedux-todo App', () => {
  let page: AngulareduxTodoPage;

  beforeEach(() => {
    page = new AngulareduxTodoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
