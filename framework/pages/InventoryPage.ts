import { expect, Locator } from "@playwright/test";
import { BasePage } from "../pages/BasePage";

export class InventoryPage extends BasePage {
  title_regex = new RegExp(`Swag Labs`);
  url_regex = new RegExp("/inventory.html");

  //locators
  readonly inventoryContainer: Locator = this.page.locator("id=inventory_container").first();

  //methods
  async open(): Promise<InventoryPage> {
    await this.page.goto("/inventory.html");
    return this;
  }

  async verifyPageOpened(): Promise<void> {
    await super.verifyPageOpened();
    await expect(this.inventoryContainer).toBeVisible();
  }
}
