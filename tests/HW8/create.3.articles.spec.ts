import {test, expect, Page} from "@playwright/test";


async function login (page: Page){
    await page.locator('//a[href="/login"]').click();
    await page.locator()
}

test('create 3 articles', async ({page}) => {

})