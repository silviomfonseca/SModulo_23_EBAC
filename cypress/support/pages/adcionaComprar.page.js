/// <reference types="Cypress" />


export const adicionaComprarPage = {
    get comprar() { return cy.get('.single_add_to_cart_button')},
    clicaComprar() { this.comprar.click() },

    get textComprar() { return cy.get('.stock').contains(' em estoque') },

    get confere() { return cy.get('.woocommerce-message > .button')},
    clicaConfere(){ this.confere.click()}
}


