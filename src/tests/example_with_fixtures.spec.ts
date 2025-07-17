import { test } from '../fixtures/sauce-lab-fixture';
import { expect } from '@playwright/test';


test.describe("test suite related to fixtures", async() => {
  test('can see products list after login', async ({ loggedInPage }) => {
    const inventoryItems = loggedInPage.locator('.inventory_item');
    await expect(inventoryItems).toHaveCount(6); // Should list 6 items
  });
})