import { BasePage } from "./BasePage"; 

class PortalTransparencia extends BasePage {

  elements = {
    searchInput: () => cy.get("#input-termo"),
    searchButton: () => cy.get("#btn-termo"),
    resultsTitle: () => cy.get("h1.fundo-cinza--claro"),
  };

  fillSearchInput(term) {
    this.elements.searchInput().type(term);
  }

  clickSearchButton() {
    this.elements.searchButton().click();
  }

  validateSearchResult(term) {
    this.elements.resultsTitle().should("be.visible");
    this.elements
      .resultsTitle()
      .should("contain.text", `Resultados da busca por "${term}"`);
  }
}

export default new PortalTransparencia(); 
