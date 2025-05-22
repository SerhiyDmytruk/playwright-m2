import { Locator, Page } from '@playwright/test';

export class FormLogin {
    readonly emailInput: Locator
    readonly passInput: Locator
    readonly submitButton: Locator

    constructor(page: Page) {
        this.emailInput = page.locator('.form-login #email')
        this.passInput = page.locator('.form-login #pass')
        this.submitButton = page.locator('.form-login button[type="submit"]')
    }

    async login(email: string, password: string) {
        await this.emailInput.fill(email)
        await this.passInput.fill(password)
        await this.submitButton.click()
    }
}