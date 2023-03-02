/// <reference types="cypress" />

export const minhaContaDetailsPage = {
    get breadcrumbAcont() {
        return cy.get('.breadcrumb>li:last-child')
    },

    get menuLateral() {
        return ('ul .woocommerce-MyAccount-navigation-link')

    }
}
