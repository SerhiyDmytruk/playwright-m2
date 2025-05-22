import { test, expect } from '@playwright/test';

import { General } from './page/general.page';
import { FormLogin } from './components/form-login';

import { testData } from '../test.data';

test.beforeEach(async({page}) => {
    const homePage = new General(page)
    await homePage.openSite(testData.URL + testData.pathAccount)
})

test('checking Login', async({page}) => {

    const LoginPage = new FormLogin(page)
    await LoginPage.login(testData.email, testData.password)

    await page.waitForURL(`**/customer/account/**`);
})