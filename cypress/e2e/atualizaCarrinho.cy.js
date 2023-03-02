/// <reference types="cypress" />


import {
    verCarrinhoPage, atualizarCarrinho
} from '../support/pages'
const data = require('../fixtures/data.json')
const perfil = require('../fixtures/perfil.json')


describe('Checkout', () => {
    before(() => {
        cy.visit('my-account/')
        cy.fixture('perfil').then(dados => {
            cy.login(perfil.email, perfil.senha)
            cy.get('.logo-in-theme > .logo > a >').click()
        })

    });

    it('Atualizar carrinho de compras', () => {

        cy.intercept({
            method: 'GET',
            url: '/carrinho/*',
            query: {
                term: 'View Cart'
            }
        }, req => {
            req.reply(
                {
                    statusCode: 200,
                    body: `${req.query.callback}(
                    ${JSON.stringify()}
                )`
                }
            )
        }),
            verCarrinhoPage.clicaCarrinho()
        verCarrinhoPage.clicaViewCart()


        cy.intercept({
            method: 'POST',
            url: 'carrinho/*',
            query: {
                term: 'plus'
            }
        }, req => {
            req.reply(
                {
                    statusCode: 302,
                    body: `${req.query.callback}(
                        ${JSON.stringify()}
                    )`
                }
            )
        }),
            atualizarCarrinho.digitaQtd()

        cy.intercept({
            method: 'POST',
            url: 'carrinho/*',
            query: {
                term: 'plus'
            }
        }, req => {
            req.reply(
                {
                    statusCode: 302,
                    body: `${req.query.callback}(
                            ${JSON.stringify()}
                        )`
                }
            )
        })


    })

})