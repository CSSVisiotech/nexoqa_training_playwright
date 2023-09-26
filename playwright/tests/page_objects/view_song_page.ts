import {Page, Locator} from '@playwright/test'
export class ViewSong {

    readonly page: Page;
    readonly editButton: Locator;

    constructor(page:Page) {
        this.page = page;
        this.editButton = this.page.locator('a[href="#/songs/edit"]');
    }
}