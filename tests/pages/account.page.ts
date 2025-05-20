import { test, expect, Locator } from '@playwright/test';
import type {Page} from '@playwright/test'
import { General } from './general.page';

export class Account extends General {
    readonly page: Page
    readonly emailInput: Locator
    readonly passInput: Locator
    readonly submitButton: Locator

    constructor(page: Page) {
        super(page);
        this.page = page
        this.emailInput = page.locator('.form-login #email')
        this.passInput = page.locator('.form-login #pass')
        this.submitButton = page.locator('.form-login button[type="submit"]')
    }

    async login(email: string, password: string) {
        await this.emailInput.fill(email)
        await this.passInput.fill(password)
        await this.submitButton.click()
    }

    async openLoginPage(url) {
        await this.openSite(url)
    }
}