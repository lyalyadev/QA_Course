import {Locator, Page} from "@playwright/test";

export class SignUpPage {
    private page: Page;
    private usernameLocator: Locator;
    private passwordLocator: Locator;
    private emailLocator: Locator;
    private signUpButtonLocator: Locator;
    /*private baseUrl: string = "https://demo.learnwebdriverio.com";
    urlRegister: string = this.baseUrl + "/register";*/


    constructor(page: Page) {
        this.page = page;
        this.usernameLocator = this.page.locator('[placeholder="Username"]');
        this.passwordLocator = this.page.locator('[placeholder="Password"]');
        this.emailLocator = this.page.locator('[placeholder="Email"]');
        this.signUpButtonLocator = this.page.locator('.btn');
        //this.urlRegister = this.page.goto("https://demo.learnwebdriverio.com/register")
    }

    async goto () {
        await this.page.goto("https://demo.learnwebdriverio.com/register");

    }

    private async setUsername (username?: string){
        await this.usernameLocator.fill(username)
    }

    private async setPassword (password?: string) {
        await this.passwordLocator.fill(password)
    }

    private async setEmail (email?: string) {
        await this.emailLocator.fill(email)
    }

    private async clickSignUpButton () {
        await this.signUpButtonLocator.click()
    }

    async registerUser (registrationData: {
        username?: string,
        email?: string,
        password?: string}) {
        await this.setUsername(registrationData.username);
        await this.setEmail(registrationData.email);
        await this.setPassword(registrationData.password);
        await this.clickSignUpButton();
    }

}