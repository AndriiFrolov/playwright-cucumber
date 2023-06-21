import { expect, Page } from '@playwright/test';

export class BasePage {
  url_regex: RegExp | undefined;
  title_regex: RegExp | undefined;
  page_h1_title_regex: string | undefined;

  public page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async verifyPageOpened(): Promise<void> {
    await this.page.waitForLoadState();
    await this.verifyURL();
    await this.verifyTabTitle();
  }

  async verifyURL(): Promise<void> {
    await expect.soft(this.page).toHaveURL(this.url_regex!);
  }

  async verifyTabTitle(): Promise<void> {
    await expect.soft(this.page).toHaveTitle(this.title_regex!);
  }
}