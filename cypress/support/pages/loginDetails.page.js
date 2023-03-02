/// <reference types="cypress" />

export const loginDetailsPage = {
    get breadcrumbLogin() { return cy.get('.breadcrumb > li:last-child') },
    get loginType() { return cy.get('form .input-text') },    
    get loginTitle() { return cy.get('h1.page-title') }
}