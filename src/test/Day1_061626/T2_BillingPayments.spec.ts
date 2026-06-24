import { test, expect } from '@playwright/test';

test('MassMutual Billing & Payments Test', async ({ page }) => {

    // navigate to massmutual.com
    await page.goto('https://www.massmutual.com/');

    // click Billing & Payments link
    await page.getByRole('link', {
        name: 'Billing & Payments'
    }).click();

    // wait few seconds
    await page.waitForTimeout(3000);

    // verify user landed on payment options page
    await expect(page).toHaveURL("//*[@class='nav-link']");

    // capture current URL
    let currentUrl = page.url();

    console.log(currentUrl);

});