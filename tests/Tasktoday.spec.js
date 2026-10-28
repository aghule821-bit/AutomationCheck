import { test, expect } from '@playwright/test';
import PageObjectManager from '../PageObject/pageobjectmanager.js';

test('test', async ({ page }) => {

    const pageObjectManager = new PageObjectManager(page);

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await pageObjectManager.loginpage.usernameinput.fill('Admin');
    await pageObjectManager.loginpage.passwordinput.fill('admin123');
    await pageObjectManager.loginpage.loginbutton.click();

    await pageObjectManager.adminPage.admin.click();
    await expect(pageObjectManager.adminPage.adminHeading).toBeVisible();

    await pageObjectManager.pimPage.pim.click();
    await expect(pageObjectManager.pimPage.pimHeading).toBeVisible();
});