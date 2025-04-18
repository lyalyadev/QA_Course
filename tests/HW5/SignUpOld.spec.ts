import {test, expect} from "@playwright/test";

async function userData() {
   let usernameVar: string = 'Winnie' + Math.floor(Math.random() * 10_000);
   let userData:{usernameRandom: string; emailRandom: string; password: string } = {

       usernameRandom: usernameVar,
       emailRandom: `${usernameVar}@test.com`,
       password: "blabla123",
   }
};

test('register a new user success path', async({page}) => {

    /*let usernameVar : string = 'Winnie' + Math.floor(Math.random() * 10_000); // random data

    let userData: {usernameRandom: string; emailRandom: string; password: string} =  {
        usernameRandom: usernameVar,
        emailRandom: `${usernameVar}@test.com`,
        password: "blabla123",
    }*/

    const conduitUrl = "https://demo.learnwebdriverio.com/";
    const iconForRegistration = page.locator('//a[@href="/register"]');
    const usernameInputField = page.locator('//input[@placeholder="Username"]');
    const emailInputField = page.locator('//input[@placeholder="Email"]');
    const passwordInputField = page.locator('//input[@placeholder="Password"]');
    const signUpButton = page.locator('//button[contains(text(),"Sign up")]');

    await page.goto(conduitUrl);
    await iconForRegistration.click();
    await usernameInputField.fill(userData.usernameRandom);
    await emailInputField.fill(userData.emailRandom);
    await passwordInputField.fill(userData.password);
    await signUpButton.click();
    await page.waitForTimeout(2000)

    const navPanelUserName = page.locator('//li[@class="nav-item"][4]/a');
    await expect(navPanelUserName).toContainText(userData.usernameRandom.toLowerCase());
});

test('register a user without entering a data', async () => {

});


/*
1) goto https://demo.learnwebdriverio.com/
    2) натисніть Sign up
3) введіть всі необхідні поля
4) зареєструйтесь
5) перевірте що ви авторизовані*/
