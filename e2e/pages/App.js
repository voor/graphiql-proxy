/**
 * Extremely basic implementation at the moment, this should bind elements and context to itself as well as expect.
 */
class App {
    browser;
  
    constructor(browser) {
      this.browser = browser;
    }
  
    get browserTitle() {
      return this.browser.getTitle();
    }
  }
  
  export { App };
  