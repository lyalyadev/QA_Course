import { test, expect } from "@playwright/test";

test(' add promotional caffee', async({page}) => {

    await page.goto( 'https://coffee-cart.app/' );
    let selectCup = page.locator('.cup');

    for (let i = 0; i < 3; i++) {
        await selectCup.nth(i).click();
    }



});
