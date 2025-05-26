import { test, expect } from '@playwright/test';
import { General } from './page/general.page';

import { testData } from '../test.data';

test.beforeEach(async({page}) => {
    const homePage = new General(page)
    await homePage.openSite(testData.URL + testData.pathCategory)
})

test('checking Filter', async({page}) => {
    const filterOption = page.locator(testData.filterOption);
    const href = await filterOption.getAttribute('href'); 

    await filterOption.click()
    await page.waitForURL(href);
})

test('checking Sorting', async ({ page }) => {
    const sortItem = page.locator(testData.sortItem);
    const sortOption = 'price';

    await sortItem.waitFor({ state: 'visible' });
    await sortItem.selectOption({ value: sortOption });

    await page.pause();

    const defaultValue = await sortItem.inputValue();
    await expect(defaultValue).toBe(sortOption)
});