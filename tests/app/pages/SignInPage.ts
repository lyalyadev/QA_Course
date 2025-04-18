import {test, Page, Locator} from "@playwright/test";

export class SignInPage {

    page: Page;
    passwordLocator: Locator;
    emailLocator : Locator;
    signInButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailLocator = this.page.locator('placeholder="Email"');
        this.passwordLocator = this.page.locator('placeholder="Password"');
        this.signInButton = this.page.locator('.btn');
    }

    async setPassword (password: string) {
        await this.emailLocator.fill(password)
    }

    async setEmail (email: string) {
        await this.passwordLocator.fill(email)
    }

    async clickSignInButton () {
        await this.signInButton.click()
    }
}