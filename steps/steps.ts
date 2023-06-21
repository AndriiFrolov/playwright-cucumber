import { test, expect } from "../framework/fixtures/ObjectFixture"
import { createBdd } from "playwright-bdd";

const { Given, When, Then } = createBdd(test);

Given("I am on the login screen", async function ({ loginPage }) {
  await loginPage.open();
  await loginPage.verifyPageOpened();
});

When("I fill the login form with {string} username and {string} password", async function ({ loginPage }, username: string, password: string) {
  await loginPage.login(username, password);
});

Given("I open url {string}", async ({ page }, url: string) => {
  await page.goto(url);
});

Then("I should be able to see the home screen", async function ( {inventoryPage}) {
  await inventoryPage.verifyPageOpened();
});


Then("I should see error message {string}", async function ({ loginPage }, errorMessage: string) {
  await expect(loginPage.errorMessage).toHaveText(errorMessage);
});