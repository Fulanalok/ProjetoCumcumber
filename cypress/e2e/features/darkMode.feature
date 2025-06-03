# language: en

Feature: Dark Mode Toggle

    As a user
    I want to toggle dark mode
    To ensure the application is accessible in different lighting conditions

    Scenario: Successfully toggles dark mode
        Given I am on the Transparency Portal homepage
        When I click the dark mode toggle button
        Then the application should switch to dark mode
        And the background color should change to a darker shade
        And the text color should change to a lighter shade

    Scenario: Successfully toggles back to light mode
        Given I am on the Transparency Portal homepage
        When I click the dark mode toggle button
        And I click the dark mode toggle button again
        Then the application should switch back to light mode
        And the background color should change to a lighter shade
        And the text color should change to a darker shade