import { test, expect } from '@playwright/test';
import { HomePage } from './page_objects/home_page';
import { SongMetadataPage } from './page_objects/song_metadata_page';

test('Add new song', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  var homePage: HomePage = new HomePage(page);
  await homePage.addButton.click();
  var songMetadataPage: SongMetadataPage = new SongMetadataPage(page);
  songMetadataPage.fillSong('Song 1', '', '', '', '', '', '', '', '');
});
