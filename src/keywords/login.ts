import { Page, expect } from "@playwright/test";

export async function login(page: Page, username: string, password: string) {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', username);
  await page.fill('#password', password);
  await page.click('#login-button');
  await expect(page).toHaveURL(/.*inventory/);
}