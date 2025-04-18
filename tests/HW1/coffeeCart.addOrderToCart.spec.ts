import {test, expect} from "@playwright/test";

test ('add 1 order to the cart', async({page}) => {
    await page.goto('https://coffee-cart.app/');
    await page.locator('[data-test="Espresso_Macchiato"]').click();
    await page.locator('[aria-label="Cart page"]').click();

    await expect(page.getByRole('listitem')
        .filter({hasText: "Espresso Macchiato"}))
        .toHaveCount(1);

});