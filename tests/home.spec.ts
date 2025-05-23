import { test, expect } from '@playwright/test';
import { General } from './page/general.page';

import { Header } from './components/header';
import { Footer } from './components/footer';

import { testData } from '../test.data';

test.beforeEach(async({page}) => {
    const homePage = new General(page)
    await homePage.openSite()
})

test('checking Header, Footer', async({page}) => {
    const header = new Header(page)
    await header.expectLogo()

    const footer = new Footer(page)
    await footer.expectCopyright()
})

test('checking Menu', async({page}) => {
    const menuItem = page.locator(testData.menuItem)
    await menuItem.click()
    await page.waitForURL(testData.menuItemLink);

    await menuItem.hover()
    const subMenuItem = page.locator(testData.subMenuItem)
    await subMenuItem.click()
    await page.waitForURL(testData.subMenuItemLink);
})