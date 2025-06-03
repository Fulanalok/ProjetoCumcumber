import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import PortalTransparencia from "../../PageObjects/PortalTransparencia";

When("I click the {string} link", (linkText) => {
  if (linkText === "Obras") {
    PortalTransparencia.clickObrasTopMenu();
  }
});

Then("I should see the page for Obras expenses", () => {
  cy.url().should("include", "/obras");
  cy.title().should("contain", "Obras");
});
