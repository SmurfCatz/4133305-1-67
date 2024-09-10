import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/dashboard');
  await page.getByRole('link', { name: 'เพิ่มเมนู' }).click();
  await page.getByRole('link', { name: 'ตัวเลือก' }).click();
  await page.getByRole('button', { name: '+ เพิ่มตัวเลือก' }).click();
  await page.getByPlaceholder('ชื่อตัวเลือก').click();
  await page.getByPlaceholder('ชื่อตัวเลือก').fill('ไข่');
  await page.getByPlaceholder('กรอกชื่อช้อยส์').click();
  await page.getByPlaceholder('กรอกชื่อช้อยส์').fill('ไข่เจียว');
  await page.getByLabel('ราคาเพิ่มขึ้น').check();
  await page.getByRole('spinbutton').click();
  await page.getByRole('spinbutton').click();
  await page.getByRole('spinbutton').fill('10');
  await page.getByRole('button', { name: 'เพิ่มช้อยส์' }).click();
  await page.locator('div').filter({ hasText: /^0\/100ราคาเท่าเดิมราคาเพิ่มขึ้น$/ }).getByPlaceholder('กรอกชื่อช้อยส์').click();
  await page.locator('div').filter({ hasText: /^0\/100ราคาเท่าเดิมราคาเพิ่มขึ้น$/ }).getByPlaceholder('กรอกชื่อช้อยส์').fill('ไข่ดาว');
  await page.getByText('ราคาเพิ่มขึ้น').nth(1).click();
  await page.locator('div').filter({ hasText: /^6\/100ราคาเท่าเดิมราคาเพิ่มขึ้น$/ }).getByRole('spinbutton').click();
  await page.locator('div').filter({ hasText: /^6\/100ราคาเท่าเดิมราคาเพิ่มขึ้น$/ }).getByRole('spinbutton').fill('10');
  await page.getByRole('button', { name: 'บันทึก' }).nth(1).click();
  await page.getByRole('button', { name: 'บันทึก' }).click();
  await page.locator('div:nth-child(4) > .choice-actions > .delete-btn').click();
  await page.locator('div:nth-child(3) > .choice-actions > .delete-btn').click();
});

