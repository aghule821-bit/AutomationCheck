import{test,expect} from '@playwright/test'
test.beforeEach(async({page}) =>{
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    expect(await page.getByRole('button', { name: 'Login' })).toBeVisible();
    await page.getByRole('button', { name: 'Login' }).click();    
    await page.waitForLoadState('networkidle');
});
test.afterEach(async({page}) =>{
    await page.locator('.oxd-userdropdown-tab').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
});

test('01Admin Verification',async({page})=>{
    await page.getByText('Admin', { exact: true }).click();
    await expect (page.getByRole('heading', { name: 'Admin' })).toBeVisible();
});

test('02PIM Verification',async({page})=>{
    await page.getByRole('link', { name: 'PIM' }).click();
    await expect (page.getByRole('heading', { name: 'PIM' })).toBeVisible();
});

test('03Leave Verification',async({page})=>{
    await page.locator('a.oxd-main-menu-item.active').click();
    await expect (page.locator('h6.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module')).toBeVisible();
});







