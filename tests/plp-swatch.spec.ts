import { test, expect } from '@playwright/test';
import { General } from './page/general.page';

import { testData } from '../test.data';

test.beforeEach(async({page}) => {
    const homePage = new General(page)
    await homePage.openSite(testData.URL + testData.pathCategoryWithSwatch)
})

test('checking Swatch', async ({ page }) => {
    const productTile = page.locator(testData.configurableProduct);
    const swatchSizeDOM = page.locator(testData.productSwatchSizeDomEL + ' ' + testData.productSwatchOptionDomEL);
    const swatchColorDOM = page.locator(testData.productSwatchColorDomEL + ' ' + testData.productSwatchOptionDomEL);
    const addToCartButton = page.locator(testData.productAddToCartDomEL);

    await productTile.waitFor({ state: 'visible' });
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

    console.log('Local localStorageValue:', localStorageValue);

    expect(localStorageValue).toBeDefined();
    expect(localStorageValue.product_id).toContain(testData.configurableProductId);
});