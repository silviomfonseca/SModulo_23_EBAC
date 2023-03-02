/// <reference types="Cypress" />


export const adicionaProdutoPage = {
    get produto() { return cy.get('#ui-id-1 > :nth-child(1)') },
    clicaProduto() { this.produto.click() }
}

