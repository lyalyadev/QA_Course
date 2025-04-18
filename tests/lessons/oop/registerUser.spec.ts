import {Locator, Page, test} from "@playwright/test";
import {SignUpPage} from "../../app/pages/SignUpPage";
import { faker } from '@faker-js/faker';

test('pom example', async ({page}) => {
    const signUpPage = new SignUpPage(page);

    await page.goto("https://demo.learnwebdriverio.com/register");

    await signUpPage.registerUser({username: `user${Date.now()}`, password: `user${Date.now()}`, email: `faker.internet.email()`}); // передаем объект! для парметров!

// if we do it without methods
    // await signUpPage.usernameLocator.fill("ty");
    //await signUpPage.passwordLocator.fill("ty");
    //await signUpPage.emailLocator.fill("ty@fofo.com");
    //await signUpPage.signUpButtonLocator.click();

    // if we do it without last method "registerUser"
    /*await signUpPage.setUsername("some username");
    await signUpPage.setPassword("some password");
    await signUpPage.setEmail("user@test.com");
    await signUpPage.clickSignUpButton()*/

})