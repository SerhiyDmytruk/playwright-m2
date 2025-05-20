import { Locator, Page, expect } from '@playwright/test';

export class Footer {
  readonly copyRightText: Locator;

  constructor(page: Page) {
    this.copyRightText = page.locator('.page-footer .text-\\[10px\\].leading-3.text-accent-secondary.font-semibold:first-child');
  }

  async expectCopyright() {
    await expect(this.copyRightText).toHaveText('\n    ©2025 De Raat Security Products');
  }
}
