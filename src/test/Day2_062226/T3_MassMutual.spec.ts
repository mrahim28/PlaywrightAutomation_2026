import { test, expect } from "@playwright/test";

test("MassMutual Navigation Test", async ({ page }) => {

    // Navigate to MassMutual homepage
    await page.goto("https://www.massmutual.com");

    // Hover over Planning menu
    await page.locator("#Planning-menu").hover();

    // Click Billing & Payments
    await page.locator("a[href='https://www.massmutual.com/payment-options']").click();

    // Verify correct page opened
    await expect(page).toHaveURL(/payment-options/);

});