import {expect, test} from "@playwright/test";
import {SignUpPage} from "../app/pages/SignUpPage";
import {ArticleEditorPage} from "../app/pages/ArticleEditorPage";
import {CreatedArticlePage} from "../app/pages/CreatedArticlePage";
import fs from "fs";


test('create new article  + working with cookies', async ({page}) => {
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

});

test('zara', async ({page}) {

   // const context = await browser.newContext();
    await page.goto("https://www.zara.com/de/")

   // const cookies = await context.cookies();
  //  console.log(cookies);

    });


//gjrgr
test('zara + working with cookies', async ({context, page}) => {

    await page.goto("https://www.zara.com/de/")

    let cookies = await context.cookies();

    const cookie = cookies.find((cookie) => cookie.name === "Lyalya1");

    console.log(cookies);

    await context.addCookies([   // create, edit
        {
            name: "Lyalya",
            value: "this is my coockies",
            url: "https://demo.learnwebdriverio.com/"
        }
    ]);

    console.log(cookies);

    await context.clearCookies({name: "Lyalya"})  // delete

    console.log(cookies);

    cookies = await context.cookies();

    await page.waitForResponse("***/api/users")
    const storageState =  await  context.storageState();

    const storage = storageState.origins
        .find((value) => value.localStorage
        .find((value) => value.name === "id_token"));

    const token = storage?localStorage

  // console.log(storageState);

    fs.writevSync('Absolute Path.auth.json');

});

test.use({ storageState: "tests/lessons/oop/.auth/auth.json"});

test('saving storage state', async ({browser, page}) => {

 const context = browser.newContext({
     storageState: "tests/lessons/oop/.auth/auth.json"
 });

 await page.goto("http://demo.learnwebdriverio.com");

});
