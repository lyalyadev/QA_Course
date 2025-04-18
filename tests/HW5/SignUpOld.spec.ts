import {test, expect, Page} from "@playwright/test";
import { faker } from '@faker-js/faker';

const conduitUrl = "https://demo.learnwebdriverio.com/";

async function userData() {
    let usernameVar: string = faker.person.lastName();
    let userData:{usernameRandom: string; emailRandom: string; password: string } = {

        usernameRandom: usernameVar,
        emailRandom: `${usernameVar}@test.com`,
        password: "blabla123",
    }
    return userData;
}

/*
1) goto https://demo.learnwebdriverio.com/
    2) натисніть Sign up
3) введіть всі необхідні поля
4) зареєструйтесь
5) перевірте що ви авторизовані*/

test('register a new user success path', async({page}) => {

    const iconForRegistration = page.locator('//a[@href="/register"]');
    const usernameInputField = page.locator('//input[@placeholder="Username"]');
    const emailInputField = page.locator('//input[@placeholder="Email"]');
    const passwordInputField = page.locator('//input[@placeholder="Password"]');
    const signUpButton = page.locator('//button[contains(text(),"Sign up")]');
    const user = await userData();

    await page.goto(conduitUrl);
    await iconForRegistration.click();
    await usernameInputField.fill(user.usernameRandom);
    await emailInputField.fill(user.emailRandom);
    await passwordInputField.fill(user.password);
    await signUpButton.click();
    await page.waitForTimeout(2000)

    const navPanelUserName = page.locator('//li[@class="nav-item"][4]/a');
    await expect(navPanelUserName).toContainText(user.usernameRandom.toLowerCase());
});

/*1) goto https://demo.learnwebdriverio.com/
2) натисніть Sign up
3) натисніть кнопку Sign up
4) перевірте помилки */

test('register a user without entering a data', async ({page}) => {
    const iconForRegistration = page.locator('//a[@href="/register"]');
    const signUpButton = page.locator('//button[contains(text(),"Sign up")]');


    await page.goto(conduitUrl);
    await iconForRegistration.click();
    await signUpButton.click();

    const errorMessages = page.locator('.error-messages');
    await expect(errorMessages).toBeVisible();

});



