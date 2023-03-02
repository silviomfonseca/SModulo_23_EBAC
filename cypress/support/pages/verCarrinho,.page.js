/// <reference types="Cypress" />


export const verCarrinhoPage = {
    get carrinho() { return cy.get('.dropdown-toggle > .text-skin > .icon-basket') },
    clicaCarrinho() { this.carrinho.click() },

    get viewCart() { return cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .view-cart') },
    clicaViewCart() { this.viewCart.click() }

}

export const atualizarCarrinho = {
    get quantidade() { return cy.get('.quantity > .input-text').clear() },
    digitaQtd() { this.quantidade.type('4') }
}

export const updateCart = {
    get updateCarrinho() { return cy.get('.pull-right > .btn') },
    clicaUpdate() { this.updateCarrinho.click() }
}

export const removeProdutos = {
    get removeCarrinho() { return cy.get('.remove > .fa') },
    get textProdut() { return cy.get('.woocommerce-message') },
    clicaRemover() { this.removeCarrinho.click() }
}

