import { Page, expect } from '@playwright/test';

export class ApplitoolsPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://demo.applitools.com/');
  }

  async login(username: string, password: string) {
    await this.page.fill('#username', username);
    await this.page.fill('#password', password);
    await this.page.click('#log-in');
  }
}