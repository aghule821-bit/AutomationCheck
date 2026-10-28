import { test, expect } from '@playwright/test';
import pageobjectmanager from '../PageObject/pageobjectmanager.js';
test('test', async ({ page }) => {
const pageObjectManager = new pageobjectmanager(page);
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await pageObjectManager.loginpage.usernameinput.fill('Admin');
await pageObjectManager.loginpage.passwordinput.fill('admin123');
await pageObjectManager.loginpage.loginbutton.click();
await pageObjectManager.dashboardPage.adminlink.click();
})
