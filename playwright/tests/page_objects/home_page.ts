import {Page, Locator} from '@playwright/test'
export class HomePage {

    readonly page: Page;
    readonly addButton: Locator;
    readonly viewSong1: Locator;

    constructor(page:Page) {
        this.page = page;
        this.addButton = this.page.locator('a[href="#/songs/create"]');
        this.viewSong1 = this.page.locator('a[href="#/songs/1"]');
    }
}