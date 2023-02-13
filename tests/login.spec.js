// @ts-check
const { test, expect } = require('@playwright/test');

test('login tool QA', async ({ page }) => {
  await page.goto('https://demoqa.com/login');
  
  await page.getByPlaceholder('UserName').fill('demoqa');
  await page.getByPlaceholder('Password').fill('Welcome1!');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect('id=userName-value').toContainText('demoqa');
  // await page.close();
  // Expects the URL to contain intro.
  // await expect(page).toHaveURL(/.*intro/);
});
