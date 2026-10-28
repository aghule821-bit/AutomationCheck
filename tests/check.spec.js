import { test, expect } from '@playwright/test';

let page;

// Click Function
async function clickElement(page, linkName) {
    await page.getByRole('link', { name: linkName }).click();
}

// Visible Function
async function verifyHeading(page, headingName) {
    await expect(
        page.getByRole('heading', { name: headingName, exact: true })
    ).toBeVisible();
}

// Before All
test.beforeAll(async ({ browser }) => {

    page = await browser.newPage();

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    );

    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    await page.waitForLoadState('networkidle');
});

// After All
test.afterAll(async () => {

    await page.locator('.oxd-userdropdown-tab').click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();

});

// 01 Admin
test('01 Admin Verification', async ({}) => {

    await clickElement(page, 'Admin');
    await verifyHeading(page, 'Admin');

});

// 02 PIM
test('02 PIM Verification', async ({}) => {

    await clickElement(page, 'PIM');
    await verifyHeading(page, 'PIM');

});

// 03 Leave
test('03 Leave Verification', async ({}) => {

    await clickElement(page, 'Leave');
    await verifyHeading(page, 'Leave');

});

// 04 Time
test('04 Time Verification', async ({}) => {

    await clickElement(page, 'Time');
    await verifyHeading(page, 'Time');

});

// 05 Recruitment
test('05 Recruitment Verification', async ({}) => {

    await clickElement(page, 'Recruitment');
    await verifyHeading(page, 'Recruitment');

});

// 06 Performance
test('06 Performance Verification', async ({}) => {

    await clickElement(page, 'Performance');
    await verifyHeading(page, 'Performance');

});

// 07 Dashboard
test('07 Dashboard Verification', async ({}) => {

    await clickElement(page, 'Dashboard');
    await verifyHeading(page, 'Dashboard');

});

// 08 Claim
test('08 Claim Verification', async ({}) => {

    await clickElement(page, 'Claim');
    await verifyHeading(page, 'Claim');

});