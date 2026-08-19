import {test, expect} from '@playwright/test'
test.beforeEach(async ({ page }) => {
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    expect(await page.getByRole('button', { name: 'Login' })).toBeVisible();
    await page.getByRole('button', { name: 'Login' }).click();    
    await page.waitForLoadState('networkidle');
});
test('01-Login Verification',async({page})=>{
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
});
test('02-Dashboard Verification',async({page})=>{
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    await expect(page.getByRole('heading')).toHaveText('Dashboard');
});
test('03-URL Verification',async({page})=>{
    await expect(page).toHaveURL(/.*\/dashboard\/index$/);
    const url=page.url();
    await expect(url).toContain('dashboard')
});