import { Locator, Page, expect } from '@playwright/test';

import { testData } from '../../test.data';

export class Header {
  readonly headerLogo: Locator;

  constructor(page: Page) {
    this.headerLogo = page.locator(testData.headerLogo);
  }

  async expectLogo() {
    await expect(this.headerLogo).toBeVisible();
  } 
}
