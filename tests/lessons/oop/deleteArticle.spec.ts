import {test, expect} from "@playwright/test";
import {SignUpPage} from "../../app/pages/SignUpPage";
import {ArticleEditorPage} from "../../app/pages/ArticleEditorPage";
import {CreatedArticlePage} from "../../app/pages/CreatedArticlePage";


test('delete article', async ({page}) => {
    const signUpPage = new SignUpPage(page);
    const articleEditorPage = new ArticleEditorPage(page);
    const createdArticlePage = new CreatedArticlePage(page);

    await signUpPage.goto();
    await signUpPage.registerUser({
        username: `pooh${Date.now()}`,
        email: `pooh${Date.now()}@test.com`,
        password: `pooh${Date.now()}`,
    });

await page.getByRole('link', {name: "This is new article"});

const title
})