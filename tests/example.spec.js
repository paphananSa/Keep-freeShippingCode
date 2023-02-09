// @ts-check
const { test, expect } = require('@playwright/test');

test('open shopee browser', async ({ page }) => {
  await page.goto('https://shopee.co.th/');
  await page.click('//*[@id="modal"]/div[1]/div[1]/div/div[3]/div[1]/button');
  await page.click('shopee-banner-popup-stateful svg');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Shopee Thailand/);
});

test('login', async ({ page }) => {
  await page.goto('https://shopee.co.th/');
  await page.locator('#modal').getByRole('button', { name: 'ไทย' }).click();
  await page.locator('shopee-banner-popup-stateful svg').click();

  await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
  // you can fill username yourself
  await page.getByPlaceholder('หมายเลขโทรศัพท์ / Email / ชื่อผู้ใช้').fill('0902711115');
  // you can fill password yourself
  await page.getByPlaceholder('รหัสผ่าน').fill('Pa0902711115');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();

  // Click the get started link.
  // await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  // await expect(page).toHaveURL(/.*intro/);
});
