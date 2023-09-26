import { test, expect } from '@playwright/test';
import { HomePage } from './page_objects/home_page';
import { ViewSong } from './page_objects/view_song_page';
import { SongMetadataPage } from './page_objects/song_metadata_page';

test('Edit a song', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    var homePage: HomePage = new HomePage(page);
    var viewSongPage: ViewSong = new ViewSong(page);
    await homePage.viewSong1.click();
    await viewSongPage.editButton.click();
});