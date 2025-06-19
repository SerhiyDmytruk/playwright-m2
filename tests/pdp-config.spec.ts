import { test, expect } from '@playwright/test';
import { General } from './page/general.page';

import { testData } from '../test.data';

test.beforeEach(async({page}) => {
    const homePage = new General(page)
    await homePage.openSite(testData.URL + testData.pathPDPConfigurable)
})

test('checking AddToCart', async ({ page }) => {
    const swatchSizeDOM = page.locator(testData.pathPDPConfigurableSizeDomEL + ' ' + testData.pathPDPConfigurableOptionDomEL);
    const swatchColorDOM = page.locator(testData.pathPDPConfigurableColorDomEL + ' ' + testData.pathPDPConfigurableOptionDomEL);
    const addToCartButton = page.locator(testData.pathPDPConfigurableAddToCartButtonDomEL);

    await swatchSizeDOM.first().click();
    await swatchColorDOM.first().click();
    
    await Promise.all([
        page.waitForResponse(response => response.url().includes('/checkout/cart') && response.status() === 200),
        addToCartButton.click()
    ]);

    await page.waitForTimeout(1000);

    const localStorageValue = await page.evaluate(() => {
        const storageItem = window.localStorage.getItem('mage-cache-storage');
        return storageItem ? JSON.parse(storageItem).cart.items[0] : '';
    });

    expect(localStorageValue).toBeDefined();
    expect(localStorageValue.product_id).toContain(testData.pdpConfigurableId);
});