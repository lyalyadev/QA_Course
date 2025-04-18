import {test, expect, chromium} from "@playwright/test";

test('increase quantity in the cart', async() => {

    const browser = await chromium.launch({headless: false}); // create browser object
    const context = await browser.newContext(); //  обьединяет страницы
    // контекст дает возможность работать с кукис, авторизацией, геолокация,

    const page = await browser.newPage();
    const page1 = await browser.newPage();
    const page2 = await browser.newPage();
    const page3 = await browser.newPage();
    const page4 = await browser.newPage();
    const page5 = await browser.newPage();

       console.log("safs");
})

test('fixtures', async({page}) => {

        // browser -> context -> page
    await page.goto( 'https://coffee-cart.app/' );

});

test('', async ({page}) => {
    await page.goto('https://coffee-cart.app/');
    const espresso = page.locator('[data-cy="Americano"]')
    await espresso.click({button: "right", clickCount: 1, delay: 500});
    await espresso.fill('', {force: false})

// AAA
    // arrange
    // act
    // assert
})