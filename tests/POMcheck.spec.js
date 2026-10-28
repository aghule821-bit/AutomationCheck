import { test, expect } from '@playwright/test';
import loginpage from '../PageObject/loginpageobject.js';

test('test', async ({ page }) => {
    const loginPage=new loginpage(page);
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

//   await expect(page.getByRole('img', { name: 'company-branding' })).toBeVisible();
//   await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();

  await loginPage.usernameinput.fill('Admin');
  await loginPage.passwordinput.fill('admin123');

//   await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
  await loginPage.loginbutton.click();

//   await expect(page.getByText('Time at Work')).toBeVisible();
//   await expect(page.getByText('My Actions')).toBeVisible();
//   await expect(page.getByText('Quick Launch')).toBeVisible();
//   await expect(page.getByText('Buzz Latest Posts')).toBeVisible();
//   await expect(page.getByText('Employees on Leave Today')).toBeVisible();
//   await expect(page.getByText('Employee Distribution by Sub')).toBeVisible();
//   await expect(page.getByText('Employee Distribution by Location')).toBeVisible();

//   await page.locator('.oxd-userdropdown-tab').click();
//   await page.getByRole('menuitem', { name: 'Logout' }).click();
});