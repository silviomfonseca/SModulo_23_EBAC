/// <reference types="Cypress" />


export const colorProdutoPage = {
    get color() { return cy.get('.button-variable-item-Orange') },
    clicaColor() { this.color.click() }
    
}

