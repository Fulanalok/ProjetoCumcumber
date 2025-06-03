# language: en

Feature: Obras Section Access

    As a user
    I want to access the Obras section from the top menu
    So that I can view information about public works

    Scenario: Accessing the Obras section from the top menu
        Given I am on the Transparency Portal homepage
        When I click the "OBRAS" link
        Then I should see the page for Obras expenses