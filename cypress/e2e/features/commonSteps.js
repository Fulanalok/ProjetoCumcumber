
import { Given } from "@badeball/cypress-cucumber-preprocessor";
import PortalTransparencia from "../../PageObjects/PortalTransparencia"; 

Given("I am on the Transparency Portal homepage", () => {
    PortalTransparencia.visitHomePage();
});
