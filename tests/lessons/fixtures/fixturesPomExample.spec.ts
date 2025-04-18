import {expect} from "@playwright/test";
import {SignUpPage} from "../../app/pages/SignUpPage";
import {ArticleEditorPage} from "../../app/pages/ArticleEditorPage";
import {CreatedArticlePage} from "../../app/pages/CreatedArticlePage";
import {test} from "./fixtures";

let signUpPage;
let articleEditorPage;
let createdArticle;


test.beforeEach(({page}) => {
        const signUpPage = new SignUpPage(page);
        const articleEditorPage = new ArticleEditorPage(page);
        const createdArticle = new CreatedArticlePage(page);
    })

test('create new article fixtures', async ({page}) => {

    //await page.goto("https://demo.learnwebdriverio.com/register");
    await signUpPage.goto();

    await signUpPage.registerUser({
        username: `winnie${Date.now()}`,
        email: `winnie${Date.now()}@test.com`,
        password: `pass${Date.now()}`
    });

    await page.getByRole('link', {name: "New Article"}).click();
    //await articleEditorPage.goto(page);
    await articleEditorPage.editArticle({title: "Hi!", description: "cool article", body: "asfa afsfkf;" });
    await articleEditorPage.publishArticle();

    const articleHeader = createdArticle.getArticleLocatorByTitle("Hi!");
    await expect(articleHeader).toBeTruthy();

})