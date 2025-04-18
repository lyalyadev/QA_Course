import {Page, Locator, test} from "@playwright/test";
import {SignUpPage} from "./SignUpPage";

export class ArticleEditorPage {
    private page: Page;
    private titleLocator: Locator;
    private descriptionLocator: Locator;
    private bodyLocator: Locator;
    private publishArticleButtonLocator: Locator;


    constructor(page: Page) {
        this.titleLocator = page.locator('[data-qa-id="editor-title"]');
        this.descriptionLocator = page.locator('[data-qa-id="editor-description"]');
        this.bodyLocator = page.getByRole('textbox', {name: "Write your article"});
        this.publishArticleButtonLocator = page.locator(`[data-qa-id="editor-publish"]`);

    }

    async goto(page) {
        await this.page.goto('https://demo.learnwebdriverio.com/editor');
    }

    async editArticle(articleData: {title: string, description?: string, body?: string}) {
        await this.titleLocator.fill(articleData.title);
        await this.descriptionLocator.fill(articleData.description)
        await this.bodyLocator.fill(articleData.body);
    }

    async publishArticle () {
        await this.publishArticleButtonLocator.click()
    }

}
//ttt

