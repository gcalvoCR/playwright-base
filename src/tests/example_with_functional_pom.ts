import { test, expect } from '@playwright/test';
import { login } from '../keywords/login';


test.describe("test suite using functional pom", async() => {
  test('login success with valid user', async ({ page }) => {
    await login(page, 'standard_user', 'secret_sauce');
  });
});
