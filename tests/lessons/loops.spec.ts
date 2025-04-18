import {test, expect} from "@playwright/test";

test('add order by dialog mode', async({page}) =>{

    await page.goto('https://coffee-cart.app/');

    //const count = await page.locator()

    for (let i = 0; i< 9; i++) {
        await page.locator(".cup-body").nth(i).click();
    }



})