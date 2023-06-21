
Feature: Andrii User Story @REQ_TP-24 @regression

  Scenario: Positive login scenario @TEST_TP-21 @smoke
    Given I am on the login screen
    When I fill the login form with "standard_user2" username and "secret_sauce" password
    Then I should be able to see the home screen

  Scenario: Negative login scenario @TEST_TP-22
    Given I am on the login screen
    When I fill the login form with "invalid_user" username and "secret_sauce" password
    Then I should see error message "Epic sadface: Username and password do not match any user in this service" 
