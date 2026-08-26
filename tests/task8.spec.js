import{test,expect} from '@playwright/test'
let page;
test.beforeAll(async({browser})=>{
page=await browser.newPage();
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    expect(await page.getByRole('button', { name: 'Login' })).toBeVisible();
    await page.getByRole('button', { name: 'Login' }).click();    
    await page.waitForLoadState('networkidle');
});

test.afterAll(async() =>{
    await page.locator('.oxd-userdropdown-tab').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
});

test('01Admin Verification',async({})=>{
    await page.getByText('Admin', { exact: true }).click();
    await expect (page.getByRole('heading', { name: 'Admin' })).toBeVisible();
});

test('02PIM Verification',async({})=>{
    await page.getByRole('link', { name: 'PIM' }).click();
    await expect (page.getByRole('heading', { name: 'PIM' })).toBeVisible();
});

test('03Leave Verification',async({})=>{
    await page.locator('a').filter({ hasText: 'Leave' }).first().click();
    await expect (page.getByRole('heading', { name: 'Leave'}).first()).toBeVisible();
});







