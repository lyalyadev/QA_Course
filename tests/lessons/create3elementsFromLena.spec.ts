import { test, expect, Page } from "@playwright/test";

const URL = "https://demo.learnwebdriverio.com/register";
const articleTitleStablePart = "Some Article and ";

function inputLocatorByPlaceholder(page: Page, placeholder: string) {
    return page.locator(`//*[@placeholder="${placeholder}"]`);
}

function clickSignUp(page: Page) {
    return page.locator('//button[contains(text(),"Sign up")]').click();
}

async function signUpUser(page: Page) {
    const randomUsername = `user${Date.now()}`;
    const randomEmail = `user${Date.now()}@gmail.com`;
    const randomPassword = `Password${Date.now()}`;

    await inputLocatorByPlaceholder(page, "Username").fill(randomUsername);
    await inputLocatorByPlaceholder(page, "Email").fill(randomEmail);
    await inputLocatorByPlaceholder(page, "Password").fill(randomPassword);
    await clickSignUp(page);
}

function clickOnNewArticleLink(page: Page) {
    return page.locator('//a[@href="/editor"]').click();
}

function clickOnPublishArticle(page: Page) {
    return page.locator('//button[@data-qa-id="editor-publish"]').click();
}

async function createArticle(page: Page, title: string) {
    await clickOnNewArticleLink(page);
    await inputLocatorByPlaceholder(page, "Article Title").fill(
        articleTitleStablePart + title
    );
    await inputLocatorByPlaceholder(page, "What's this article about?").fill(
        "This Article is about"
    );
    await inputLocatorByPlaceholder(
        page,
        "Write your article (in markdown)"
    ).fill("You can read in this Article latest news");
    await inputLocatorByPlaceholder(page, "Enter tags").fill("tag");
    await clickOnPublishArticle(page);
}

function createFewArticles(page: Page, count: number) {
    for (let i = 0; i < count; i++) {
        createArticle(page, `${i}`);
    }
}

test("Create 3 articles successful flow", async ({ page }) => {
    await page.goto(URL);
    await signUpUser(page);

    createFewArticles(page, 3);
    await page
        .locator('//a[contains(@class, "router-link-active")]')
        .first()
        .click();
    await expect(
        page.locator('//h1[contains(text(), "Some Article and ")]')
    ).toBeVisible();
    expect(
        await page.locator('//h1[contains(text(), "Some Article and ")]').count()
    ).toEqual(3);
});