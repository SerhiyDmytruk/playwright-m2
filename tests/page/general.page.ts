import type {Page} from '@playwright/test'

export class General {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async openSite(url=""): Promise<void> {
        await this.page.goto(url, { waitUntil: 'domcontentloaded' });
    }
}
