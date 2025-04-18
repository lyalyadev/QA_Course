import {test, expect} from "@playwright/test";

test ('delete order from the cart', async ({page}) => {


    const urlCoffee = 'https://coffee-cart.app/';
    await page.goto(urlCoffee);
    await page.locator('[data-cy="Mocha"]').click();
    await page.locator('[href="/cart"]').click();
    await page.locator('.delete').click();
    await expect(page.locator('#app')).toContainText('No coffee, go add some.')
})