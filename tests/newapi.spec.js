import { test, expect } from '@playwright/test';

test.describe('New API', () => {

const baseURL = 'https://restful-booker.herokuapp.com';

test('should generate a new token', async ({ request }) => {

    const response = await request.post(`${baseURL}/auth`, {
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            username: 'admin',
            password: 'password123'
        }
    });

    expect(response.status()).toBe(200);

    console.log('Response status:', response.status());
    console.log('Response status text:', response.statusText());

    const responseData = await response.json();

    console.log('Response data:', responseData);

    expect(responseData.token).not.toBeNull();
    expect(responseData.token).toBeTruthy();

    const authToken = responseData.token;

    console.log('Auth token:', authToken);
});


});
