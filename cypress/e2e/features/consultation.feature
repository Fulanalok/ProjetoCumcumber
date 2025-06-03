# language: en

Feature: Citizen Benefit Consultation on the Transparency Portal

    As a citizen
    I want to search for benefits on the Transparency Portal
    To check public information

    Scenario: Successful search for a benefit
        Given I am on the Transparency Portal homepage
        When I search for the benefit "Auxílio Emergencial"
        Then I should see results related to the consulted benefit with the name "Auxílio Emergencial"