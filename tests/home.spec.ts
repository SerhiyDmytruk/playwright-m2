import { test, expect } from '@playwright/test';
import { General } from './pages/general.page';
import { Footer } from './components/footer.components';

test.beforeEach(async({page}) => {
    const homePage = new General(page)
    await homePage.openSite()
})

test('checking HomePage', async({page}) => {
    const footer = new Footer(page)
    await footer.expectCopyright()
})