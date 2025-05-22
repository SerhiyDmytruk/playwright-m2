import { Locator, Page, expect } from '@playwright/test';

import { testData } from '../../test.data';

export class Footer {
  readonly copyRightText: Locator;

  constructor(page: Page) {
    this.copyRightText = page.locator(testData.footerItemCopyright);
  }

  async expectCopyright() {
    await expect(this.copyRightText).toHaveText(testData.footerItemCopyrightText);
  }
}
