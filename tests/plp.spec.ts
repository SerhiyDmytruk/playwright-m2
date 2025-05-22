import { test, expect } from '@playwright/test';
import { General } from './page/general.page';

import { testData } from '../test.data';

test.beforeEach(async({page}) => {
    const homePage = new General(page)
    await homePage.openSite(testData.URL + testData.pathCategory)
})

test('checking Filter', async({page}) => {


})