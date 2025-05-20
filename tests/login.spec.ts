import { test, expect } from '@playwright/test';
import { Account } from './pages/account.page';
import { testData } from '../test.data';

test.beforeEach(async({page}) => {
    const LoginPage = new Account(page)

    await LoginPage.openLoginPage(testData.URL + testData.pathAccount)
    await LoginPage.login(testData.email, testData.password)
})

test('checking Login', async({page}) => {

    const LoginPage = new Account(page)
    await LoginPage.openLoginPage(testData.URL + testData.pathAccount)

    await page.waitForURL(`**/customer/account/**`);
})