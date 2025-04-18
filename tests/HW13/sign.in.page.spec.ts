import {test} from "@playwright/test";
import {SignInPage} from "../app/pages/SignInPage";


test('login with valid credentials', async ({page}) => {

    const signInPage = new SignInPage(page);
    await signInPage.setPassword("some password");
    await signInPage.setEmail("user@test.com");
    await signInPage.clickSignInButton()

})