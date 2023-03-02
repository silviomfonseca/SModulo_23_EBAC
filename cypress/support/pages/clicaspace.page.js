/// <reference types="Cypress" />


export const clicaSpace = {
    get magnifier() { return cy.get('.site-header .search-form > button') },
    searchMagnifier() { this.magnifier.click() }
}