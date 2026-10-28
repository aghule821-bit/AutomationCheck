import {test,exact} from '@playwright/test';
let page;
test.beforeAll(async({browser})=>{
page=await browser.new.page();
await page.goto ('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
await page.getByPlaceholder('Password').fill('admin123');
page.getByRole('button', { name: 'Login' }).click();
})
test('Admin verifitcation',async({page})=>{

    
})

