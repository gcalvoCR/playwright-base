import { expect } from '@playwright/test';
import { test } from '@playwright/test';
import { ApplitoolsPage } from '../pages/applitools.page';


test.describe("test suite using traditional pom", async() => {
    test('login works with valid user', async ({ page }) => {
      const loginPage = new ApplitoolsPage(page);
      await loginPage.goto();
      await loginPage.login('user', 'password');
      await expect(page).toHaveURL(/.*\/app.html/);
    });
})