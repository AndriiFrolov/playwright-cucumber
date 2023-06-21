/** Generated from: features/login.feature */
import { test } from "../../framework/fixtures/ObjectFixture.ts";

test.describe("Andrii User Story @REQ_TP-24 @regression", () => {

  test("Positive login scenario @TEST_TP-21 @smoke", async ({ Given, loginPage, When, Then, inventoryPage }) => {
    await Given("I am on the login screen", null, { loginPage });
    await When("I fill the login form with \"standard_user2\" username and \"secret_sauce\" password", null, { loginPage });
    await Then("I should be able to see the home screen", null, { inventoryPage });
  });

  test("Negative login scenario @TEST_TP-22", async ({ Given, loginPage, When, Then }) => {
    await Given("I am on the login screen", null, { loginPage });
    await When("I fill the login form with \"invalid_user\" username and \"secret_sauce\" password", null, { loginPage });
    await Then("I should see error message \"Epic sadface: Username and password do not match any user in this service\"", null, { loginPage });
  });

});
