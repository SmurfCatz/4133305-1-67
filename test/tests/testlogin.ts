import { test, expect } from '@playwright/test';
import path from 'path';

const authFile = path.resoler(_dirname '../playwright/.auth/user.json');
test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/login');
  await page.getByRole('button', { name: 'Google Logo เข้าสู่ระบบด้วย' }).click();
  await page.getByLabel('Email or phone').fill('650112418064@bru.ac.th');
  await page.getByRole('button', { name: 'Next', exact: true }).click();
  await page.getByLabel('Enter your password').fill('t26@4e1f86');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'ดำเนินการต่อ' }).click();

  await page.context().storageState({path: authFile});

  await page.getByRole('button', { name: 'Open user menu User Profile' }).click();
  await page.getByRole('menuitem', { name: 'ออกจากระบบ' }).click();
});

test('test-2', async ({ page }) => {
    await page.goto('http://localhost:3000/login');
    await page.getByRole('button', { name: 'Google Logo เข้าสู่ระบบด้วย' }).click();
    await page.getByLabel('Email or phone').fill('650112418064@bru.ac.th');
    await page.getByRole('button', { name: 'Next', exact: true }).click();
    await page.getByLabel('Enter your password').fill('t26@4e1f86');
    await page.getByRole('button', { name: 'Next' }).click();
    await page.goto('https://accounts.google.com/signin/oauth/consent?authuser=0&part=AJi8hANxmACy1h7OlIidA0OnILpVR0u9lxlVPwyTV2p-nOexof2lc3kecrRues1e0nK1fzpOVXrD_h2uEaKWXZjH2l8IViDuAnfoiDP7uh-4fN9rwANRtB8R0FmfyDqgOONTIab8fQuHVYK7xya3UGK_JJBu0kpOQkF-xS6q92BbYmOspAkcfpawmA4w0TKVGzm9x-Bse_Q087HHbbGB_5rjLmIYNcruFIuWe9jtmS_zHKeTwjxtt49AzbW9k_1ZVy25LQMffBPzwmKM1Cm2OeCcEzyVDkehHd8thvdq9i-jd6Kx_pvjY7VpYAuvEtOMHKZ6kKz7dEKigUXrEcKhSWbILcNG4q9uJFStVvtY_yz7amZivMFWhwg8nxpZ3CLdig5cEpHOnhCi9Tl66E70bh-ie_P-rYPREkaZcuwzgZ9jAA6fDjSJmSEqXobbVoFlDobsYaVyTzK5RHMvDPzU8ZsN1dm503rWvg&flowName=GeneralOAuthFlow&as=S-1036946452%3A1724392481820262&client_id=577052775044-radudfqafchn3oq5o4l5e3usu7afqnn5.apps.googleusercontent.com&rapt=AEjHL4MDQo-sP3ChKoyvcBTyw56McR-LPBGsbd0Vm9TrHqQZkTxQKthYDfpSRv-504mUThMvqTxcm22HeelxfadkTei1Q3WFiNpIOwrZrkqO2y96T9voFzs#');
    await page.goto('https://accounts.google.com/signin/oauth/v2/consentsummary?authuser=0&part=AJi8hANxmACy1h7OlIidA0OnILpVR0u9lxlVPwyTV2p-nOexof2lc3kecrRues1e0nK1fzpOVXrD_h2uEaKWXZjH2l8IViDuAnfoiDP7uh-4fN9rwANRtB8R0FmfyDqgOONTIab8fQuHVYK7xya3UGK_JJBu0kpOQkF-xS6q92BbYmOspAkcfpawmA4w0TKVGzm9x-Bse_Q087HHbbGB_5rjLmIYNcruFIuWe9jtmS_zHKeTwjxtt49AzbW9k_1ZVy25LQMffBPzwmKM1Cm2OeCcEzyVDkehHd8thvdq9i-jd6Kx_pvjY7VpYAuvEtOMHKZ6kKz7dEKigUXrEcKhSWbILcNG4q9uJFStVvtY_yz7amZivMFWhwg8nxpZ3CLdig5cEpHOnhCi9Tl66E70bh-ie_P-rYPREkaZcuwzgZ9jAA6fDjSJmSEqXobbVoFlDobsYaVyTzK5RHMvDPzU8ZsN1dm503rWvg&flowName=GeneralOAuthFlow&as=S-1036946452%3A1724392481820262&client_id=577052775044-radudfqafchn3oq5o4l5e3usu7afqnn5.apps.googleusercontent.com&rapt=AEjHL4MDQo-sP3ChKoyvcBTyw56McR-LPBGsbd0Vm9TrHqQZkTxQKthYDfpSRv-504mUThMvqTxcm22HeelxfadkTei1Q3WFiNpIOwrZrkqO2y96T9voFzs');
    await page.getByRole('button', { name: 'ดำเนินการต่อ' }).click();  
    await page.getByRole('button', { name: 'Open user menu User Profile' }).click();
    await page.getByRole('menuitem', { name: 'ออกจากระบบ' }).click();
});