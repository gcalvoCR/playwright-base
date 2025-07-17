import { test as base, expect, Page } from '@playwright/test';
import colors from 'colors';

const testURL = process.env.TEST_URL ;


type SauceFixtures = {
  loggedInPage: Page;
  testURL: string;
};

export const test = base.extend<SauceFixtures>({
  loggedInPage: async ({ page }, use) => {
    // Go to login page
    await page.goto('https://www.saucedemo.com/');

    // Fill credentials and log in
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // Assert we reached the inventory page
    await expect(page).toHaveURL(/.*inventory/);

    // Use this page in the test
    await use(page);
    
    // Optionally: logout or cleanup
  },
  testURL: testURL
});


