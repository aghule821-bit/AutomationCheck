
import { test, expect } from '@playwright/test';

test.describe('Authentication API Testing', () => {

    const baseURL = 'https://restful-booker.herokuapp.com';

    test('Generate Auth Token', async ({ request }) => {

        // Step 1: Send POST request
        const response = await request.post(`${baseURL}/auth`, {
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                username: 'admin',
                password: 'password123'
            }
        });

        // Step 2: Verify status code
        expect(response.status()).toBe(200);

        // Step 3: Get response data
        const responseData = await response.json();

        // Step 4: Print response details
        console.log('Response Status:', response.status());
        console.log('Response Data:', responseData);
        console.log('Auth Token:', responseData.token);

        // Step 5: Verify token is received
        expect(responseData.token).toBeTruthy();

    });

});