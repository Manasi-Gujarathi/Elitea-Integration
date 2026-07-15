import { test, expect } from '@playwright/test';

test('navigate from Services to Client Work and verify Client Work text is visible', async ({ page }) => {
  await page.goto('https://www.epam.com/');

  await page.getByRole('button', { name: 'Accept All' }).click();

  await page.goto('https://www.epam.com/services');

  await page.getByRole('link', { name: 'Explore Our Client Work' }).click();

  await expect(page.getByRole('heading', { name: 'Client Work' })).toBeVisible();
});
