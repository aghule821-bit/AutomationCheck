# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Assigment2.spec.js >> Admin verifitcation
- Location: tests\Assigment2.spec.js:10:5

# Error details

```
TypeError: Cannot read properties of undefined (reading 'page')
```

# Test source

```ts
  1  | import {test,exact} from '@playwright/test';
  2  | let page;
  3  | test.beforeAll(async({browser})=>{
> 4  | page=await browser.new.page();
     |                        ^ TypeError: Cannot read properties of undefined (reading 'page')
  5  | await page.goto ('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  6  | await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  7  | await page.getByPlaceholder('Password').fill('admin123');
  8  | page.getByRole('button', { name: 'Login' }).click();
  9  | })
  10 | test('Admin verifitcation',{tag :"@smoke"},async({page})=>{
  11 | 
  12 |     
  13 | })
  14 | 
  15 | 
```