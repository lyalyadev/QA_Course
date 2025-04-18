import {Locator, Page} from "@playwright/test";

export class CreatedArticlePage {
    private page: Page;
    editButtonLocator: Locator;
    deleteButtonLocator: Locator;
    commentFieldLocator: Locator;
    postCommentButtonLocator: Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.editButtonLocator = this.page.locator('[data-qa-id="article-edit"]');
        this.deleteButtonLocator = this.page.locator('[data-qa-id="article-delete"]');
        this.commentFieldLocator = this.page.locator('[placeholder="Write a comment..."]');
        this.postCommentButtonLocator = this.page.getByRole('button', {name: "Post Comment"});
    }


    async getArticleLocatorByTitle (title: string){
        return this.page.getByRole("heading", {name: title})
 }

    async clickEditButton (index: number){
        await this.editButtonLocator.nth(index).click();
    }

    async clickDeleteButton (index: number) {
        await this.deleteButtonLocator.nth(index).click();
    }

    async addComment (text: string) {
        await this.commentFieldLocator.fill(text);
        await this.postCommentButtonLocator.click();
    }

}

