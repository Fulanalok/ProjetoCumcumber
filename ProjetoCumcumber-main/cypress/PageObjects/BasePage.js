export class BasePage {
    visitHomePage() {
        cy.visit('/');
    }
    getPageTitle() {
        return cy.title();
    }
}