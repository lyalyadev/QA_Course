import {test, expect} from "@playwright/test";

test('add order by dialog mode', async({page}) =>{

    await page.goto('https://coffee-cart.app/');
    await page.locator('[data-cy="Americano"]').click({button: "right"});

    let dialogAddToCart = page.locator('[data-cy="add-to-cart-modal"]');
    await expect(dialogAddToCart).toContainText('Add Americano to the cart?YesNo');

    await dialogAddToCart.getByRole('button', {name: "Yes"}).click();
    await page.locator('[href="/cart"]').click();

    await expect(page.locator('div').filter({ hasText: /^Americano$/ })).toBeVisible();

})
