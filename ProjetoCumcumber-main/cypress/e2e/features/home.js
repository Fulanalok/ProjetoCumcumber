import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then("I should see the main title of the page", () => {
  cy.title().should("eq", "Página Inicial — Transparência PB");
});
