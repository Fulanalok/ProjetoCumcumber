import { BasePage } from "./BasePage"; 

class PortalTransparencia extends BasePage {
  elements = {
    searchInput: () => cy.get("#nolivesearchGadget"),
    searchButton: () => cy.get(".tile-search-site-bt-submit"),
    resultsTitle: () => cy.get("h1.documentFirstHeading"),
  };

  fillSearchInput(term) {
    this.elements.searchInput().type(term);
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
}

export default new PortalTransparencia(); 
