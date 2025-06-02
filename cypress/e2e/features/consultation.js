import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import PortalTransparencia from "../../PageObjects/PortalTransparencia";

When("I search for the benefit {string}", (benefitName) => {
  PortalTransparencia.fillSearchInput(benefitName);
  PortalTransparencia.clickSearchButton();
});

Then(
  "I should see results related to the consulted benefit with the name {string}",
  (benefitName) => {
    PortalTransparencia.validateSearchResult();
  }
);
