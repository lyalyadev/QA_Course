import {SignUpPage} from "../../app/pages/SignUpPage";
import {ArticleEditorPage} from "../../app/pages/ArticleEditorPage";
import {CreatedArticlePage} from "../../app/pages/CreatedArticlePage";
import {expect, test} from "@playwright/test";

test('edit article', async ({page}) => {
    const signUpPage = new SignUpPage(page);
    const articleEditorPage = new ArticleEditorPage(page);
    const createdArticlePage = new CreatedArticlePage(page);

    await signUpPage.goto();
    await signUpPage.registerUser({
        username: `winnie${Date.now()}`,
        email: `winnie${Date.now()}@test.com`,
        password: `pass${Date.now()}`
    });

    await page.getByRole('link', {name: "New Article"}).click();
    //await articleEditorPage.goto(page);

    await articleEditorPage.editArticle({
        title: "How are you?",
        description: "What a lovely day!",
        body: "qwertyuiopasdfghjk asdfghj"
    });
    await articleEditorPage.publishArticle();

    await createdArticlePage.clickEditButton(0);

    const title: string = "edited";

    await articleEditorPage.editArticle({title: `${title}`});

    await articleEditorPage.publishArticle();
    await createdArticlePage.getArticleLocatorByTitle(`${title}`);
    expect(createdArticlePage.getArticleLocatorByTitle(title)).toBeTruthy()

})