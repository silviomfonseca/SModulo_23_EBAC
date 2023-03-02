/// <reference types="Cypress" />


export const sizeProdutoPage = {
    get size() { return cy.get('.button-variable-item-S') },
    clicaSize() { this.size.click() }
    
}

