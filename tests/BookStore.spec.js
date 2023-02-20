// @ts-check
const { test, expect } = require('@playwright/test');

test('Serach book store found', async ({ page }) => {
  await page.goto('https://demoqa.com/books');
  
  await page.getByPlaceholder('Type to search').fill('Git Pocket Guide');

  await page.locator('#basic-addon2').click();

  // Expects correct UserName
  await expect(page.getByRole('link', { name: 'Understanding ECMAScript 6' })).toContainText("Git Pocket Guide");
  await page.close();
});

test('Serach book store not found', async ({ page }) => {
    await page.goto('https://demoqa.com/books');
    
    await page.getByPlaceholder('Type to search').fill('Understanding ECMAScript 7');
    await page.locator('#basic-addon2').click();

    // Expects correct UserName
    await expect(page.getByRole('link', { name: 'Understanding ECMAScript 6' })).toContainText("Understanding ECMAScript 6");
    // await page.close();
  });