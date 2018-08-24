import { expect } from 'chai';
import { App } from './pages/App';

const mainPage = new App(browser);

describe('main page', () => {
  describe('when it loads', () => {
    before(() => {
      browser.url('');
    });
    it('should say Welcome to React', () => {
      expect(mainPage.browserTitle).to.be.equal('GraphQL Playground');
    });
  });
});
