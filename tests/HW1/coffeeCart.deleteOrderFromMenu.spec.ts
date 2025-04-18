import {test, expect} from "@playwright/test";

test('delete order from menu', async ({page}) => {

    await page.goto('https://coffee-cart.app/');
    await page.locator('[data-test="Mocha"]').click();

    let totalButton = page.locator('[aria-label="Proceed to checkout"]');
    await expect(totalButton).toContainText('Total: $8.00');
    await totalButton.hover();

    //todo: why it does not work?
    //await page.locator('.pay-container.cart-preview show').getByText('Remove one Cafe Mocha').click();

    await page.getByRole('button', {name: 'Remove one Mocha'}).click();
    await expect(totalButton).toContainText('Total: $0.00');

})

