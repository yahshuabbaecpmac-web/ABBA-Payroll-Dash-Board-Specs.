import { test, expect } from '@playwright/test';

test('Dashboard visibility and redirection test', async ({ page }) => {
  await page.goto('https://theabbapayroll.com/login');
  await page.locator('#email').fill('yahshuabba.ecpmac@gmail.com');
  await page.locator('#password').fill('Test1@56');
  await page.locator('#signin-button').click();
  await page.waitForLoadState('networkidle');
  
  await expect(page).toHaveURL(/dashboard|\/$/);
  await expect(page.getByText('Present Today')).toBeVisible();
  await expect(page.getByText('Absent Today')).toBeVisible();
  await expect(page.getByText('Overtime Requests')).toBeVisible();
});
