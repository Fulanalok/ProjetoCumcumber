# language: en

Feature: Homepage Validation

    As a user
    I want to load the homepage
    To ensure it is accessible and displays correctly

    Scenario: Successfully loads the homepage
        Given I am on the Transparency Portal homepage
        Then I should see the main title of the page