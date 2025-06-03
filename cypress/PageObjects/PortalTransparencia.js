import { BasePage } from "./BasePage";

class PortalTransparencia extends BasePage {
  elements = {
    searchInput: () => cy.get("#nolivesearchGadget"),
    searchButton: () => cy.get(".tile-search-site-bt-submit"),
    resultsTitle: () => cy.get("h1.documentFirstHeading"),
    darkModeToggleButton: () =>
      cy.get("i.fa-solid.fa-circle-half-stroke").closest("a"),
    obrasTopMenuLink: () => cy.get('a.noClick').contains('Obras'),
  };

  clickDarkModeToggle() {
    this.elements.darkModeToggleButton().click();
  }

  fillSearchInput(term) {
    this.elements.searchInput().type(term);
  }

  validateDarkModeActive(isActive) {
    if (isActive) {
      cy.get("body").should("have.class", "contraste");
    } else {
      cy.get("body").should("not.have.class", "contraste");
    }
  }

  ensureDarkModeActive() {
    cy.get("body").then(($body) => {
      if (!$body.hasClass("contraste")) {
        this.clickDarkModeToggle();
        cy.get("body").should("have.class", "contraste");
      }
    });
    this.validateDarkModeActive(true);
  }

  clickSearchButton() {
    this.elements.searchButton().click();
  }

  validateSearchResult() {
    this.elements
      .resultsTitle()
      .should("be.visible")
      .and("contain.text", "Busca");
  }

  clickObrasTopMenu() {
    this.elements.obrasTopMenuLink().click();
  }
}

export default new PortalTransparencia();