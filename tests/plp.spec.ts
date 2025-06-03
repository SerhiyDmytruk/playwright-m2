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
    await expect(page).toHaveURL(href);
})

test('checking Sorting', async ({ page }) => {
    const sortItem = page.locator(testData.sortEl);
    const sortOption = 'price';

    await sortItem.waitFor({ state: 'visible' });
    await sortItem.selectOption({ value: sortOption });

    await page.pause();

    const defaultValue = await sortItem.inputValue();
    await expect(defaultValue).toBe(sortOption)
});


test('checking Pagination', async ({ page }) => {
    const paginationElPage = page.locator(testData.paginationElPage);
    const paginationElCurrentPageHREF = await paginationElPage.first().getAttribute('href');

    await paginationElPage.first().click();

    await expect(page).toHaveURL(paginationElCurrentPageHREF);
});


test('checking Product mode view', async ({ page }) => {
    const modeDomEl = page.locator(testData.modeDomEl);

    await page.waitForTimeout(1000);

    await modeDomEl.first().click({ modifiers: ['Control']  });

    await expect(page).toHaveURL(`${testData.pathCategory}?product_list_mode=list`);
});