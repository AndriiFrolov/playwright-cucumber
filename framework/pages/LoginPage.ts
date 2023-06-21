import { Locator } from "@playwright/test";
import { BasePage } from "../pages/BasePage";

export class LoginPage extends BasePage {
  title_regex = new RegExp(`Swag Labs`);
  url_regex = new RegExp("/");

  //locators
  readonly usernameInput: Locator = this.page.locator("id=user-name");
  readonly passwordInput: Locator = this.page.locator("id=password");
  readonly submitBtn: Locator = this.page.locator("id=login-button");
  readonly errorMessage: Locator = this.page.locator('h3');


  //methods
  async open(): Promise<LoginPage> {
    await this.page.goto("/");
    return this;
  }

  public async login(username: string, password: string): Promise<void> {
    console.log(`Attemting to login with credentials  ${username}, ${password}`);
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.submitBtn.click();
  }
}
