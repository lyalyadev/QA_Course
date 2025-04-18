import {expect, test} from "@playwright/test";
import {SignUpPage} from "../../app/pages/SignUpPage";
import {ArticleEditorPage} from "../../app/pages/ArticleEditorPage";
import {CreatedArticlePage} from "../../app/pages/CreatedArticlePage";

test('create new article', async ({page}) => {
    const signUpPage = new SignUpPage(page);
    const articleEditorPage = new ArticleEditorPage(page);
    const createdArticle = new CreatedArticlePage(page);

    await signUpPage.goto();

    await signUpPage.registerUser({
        username: `winnie${Date.now()}`,
        email: `winnie${Date.now()}@test.com`,
        password: `pass${Date.now()}`
    });

    await page.getByRole('link', {name: "New Article"}).click();
    //await articleEditorPage.goto(page);

    const title: string = `CreatedArticle${Date.now()}`;
    const description: string = `CreatedDescription${Date.now()}`;
    const body: string = `CreatedBody${Date.now()}`;

    await articleEditorPage.editArticle({title: `${title}`, description: `${description}`, body: `${body}` });
    await articleEditorPage.publishArticle();

    const articleHeader = createdArticle.getArticleLocatorByTitle(`${title}`);
    await expect(articleHeader).toBeTruthy();

})