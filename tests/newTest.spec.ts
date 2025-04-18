import {test} from "@playwright/test";

test('test', async ({ page }) => {
    await page.goto('https://coffee-cart.app/');
    await page.getByRole('link', { name: 'Cart page' }).click();
    await page.getByRole('link', { name: 'Menu page' }).click();
    await page.locator('[data-test="Espresso"]').click();
    await page.locator('[data-test="Espresso_Macchiato"]').click();
    await page.getByRole('link', { name: 'Cart page' }).click();
    await page.locator('html').click();
    await page.getByRole('link', { name: 'Menu page' }).click();
    await page.getByRole('link', { name: 'Cart page' }).click();
    await page.locator('[data-test="checkout"]').click();
    await page.getByRole('textbox', { name: 'Name' }).click();
    await page.getByRole('textbox', { name: 'Name' }).fill('test');
    await page.getByRole('textbox', { name: 'Name' }).press('Tab');
    await page.getByRole('textbox', { name: 'Email' }).fill('test@test.com');
    await page.getByRole('checkbox', { name: 'Promotion checkbox' }).check();
    await page.getByRole('button', { name: 'Submit' }).click();
});