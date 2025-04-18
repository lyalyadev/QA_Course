import {test, expect} from "@playwright/test";

test('increase quantity in the cart', async({page}) => {

    await page.goto( 'https://coffee-cart.app/' );

    await page.locator( '[data-cy="Mocha"]' ).click();
    await page.locator( '[href="/cart"]' ).click();

    let cartQuantity = page.locator('[aria-label="Cart page"]');
    await expect(cartQuantity).toContainText('cart (1)');

    await page.locator(':not[pay-container] div.unit-controller').filter({hasText: "+"}).click();

    await expect(cartQuantity).toContainText('cart (2)');

})
