import { test, expect } from '@playwright/test';
test.describe('API Automation', () => {
    const baseURL = 'https://reqres.in/api';
test('should create a new user', async ({ request }) => {
const response = await request.post(`${baseURL}/users`, {
headers: {
'Content-Type': 'application/json'
},
data: {
name: 'John Doe',
job: 'QA Engineer'
}
});


expect(response.status()).toBe(201);

const responseBody = await response.json();
console.log('create user details:', JSON.stringify(responseBody));


});
});