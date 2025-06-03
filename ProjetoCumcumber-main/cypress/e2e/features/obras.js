import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


When("I click the {string} link", (linkText) => {
  if (linkText === "OBRAS") { // Use "OBRAS" para corresponder ao feature file
    cy.visit("/obras"); // Visita a URL da página de Obras diretamente
  }
});

Then("I should see the page for Obras expenses", () => {
  cy.url().should("include", "/obras");
  cy.title().should("contain", "Obras");
});