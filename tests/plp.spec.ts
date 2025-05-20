import { test, expect } from '@playwright/test';
import { General } from './pages/general.page';

test.beforeEach(async({page}) => {
    const homePage = new General(page)
    await homePage.openSite()
})

test('checking PLP', async({page}) => {
    const menuItem = page.locator('.page-header .desktop-nav:not(.desktop-nav-additional) .level-0 a.level-0')
    await expect(menuItem).toHaveText('Producten');
    await menuItem.click()

    const subMenuItem = page.locator('#desktop-menu-main-products-wrapper .grid li:nth-child(1) .level-1')
    await expect(subMenuItem).toHaveText('Brand-inbraakwerende kluizen');
    await subMenuItem.click()
    await page.waitForURL('**/brand-inbraakwerende-kluizen-01.html');


    
})