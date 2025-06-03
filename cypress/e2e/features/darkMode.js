import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import PortalTransparencia from "../../PageObjects/PortalTransparencia";

When("I click the dark mode toggle button", () => {
  PortalTransparencia.clickDarkModeToggle();
});

Then("the application should switch to dark mode", () => {
  PortalTransparencia.validateDarkModeActive(true);
});

Then("the background color should change to a darker shade", () => {
  cy.get("body").should("have.class", "contraste");
});

Then("the background color should change to a lighter shade", () => {
  cy.get("body").should("not.have.class", "contraste");
});

Then("the text color should change to a lighter shade", () => {
  cy.get("body").should("have.css", "color", "rgb(255, 255, 255)");
});

Given("I am in dark mode", () => {
  PortalTransparencia.ensureDarkModeActive();
});

When("I click the dark mode toggle button again", () => {
  PortalTransparencia.clickDarkModeToggle();
});

Then("the application should switch back to light mode", () => {
  PortalTransparencia.validateDarkModeActive(false);
});

Then("the text color should change to a darker shade", () => {
  cy.get("body").should("have.css", "color", "rgb(40, 40, 40)");
});
