// @ts-check
const { test, expect } = require('@playwright/test');

test('login Tools QA correct', async ({ page }) => {
  await page.goto('https://demoqa.com/login');
  
  await page.getByPlaceholder('UserName').fill('demoqa');
  await page.getByPlaceholder('Password').fill('Welcome1!');
  await page.getByRole('button', { name: 'Login' }).click();

  // Expects correct UserName
  await expect(page.locator('id=userName-value')).toContainText("demoqa");
  // const username_text = await page.locator('id=userName-value');
  // console.log(username_text);
  await page.getByRole('button', { name: 'Log out' }).click();
  await page.close();
});

test('login Tools QA incorrect', async ({ page }) => {
  await page.goto('https://demoqa.com/login');
  
  await page.getByPlaceholder('UserName').fill('demoqa');
  await page.getByPlaceholder('Password').fill('Welcome');
  await page.getByRole('button', { name: 'Login' }).click();

  // Expects validate Invalid username or password
  await expect(page.getByText('Invalid username or password!')).toContainText("Invalid username or password!");
  await page.close();
});
