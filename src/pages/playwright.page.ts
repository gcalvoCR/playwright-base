import type { Page } from 'playwright';

export class PlaywrightDevPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://playwright.dev');
  }

  async getStarted() {
    await this.page.click('text=Get started');
    await this.page.waitForSelector(`text=Writing tests`);
  }

  async writingTests() {
    await this.getStarted();
    await this.page.click('text=Writing tests');
    await this.page.waitForSelector(`h1:has-text("Writing tests")`);
  }
}