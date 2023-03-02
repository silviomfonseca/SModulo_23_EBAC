/// <reference types="cypress" />


import {
    verCarrinhoPage, removeProdutos
} from '../support/pages'


const perfil = require('../fixtures/perfil.json')


describe('Login', () => {
    before(() => {
        cy.visit('my-account/')
        cy.fixture('perfil').then(dados => {
            cy.login(perfil.email, perfil.senha)
            cy.get('.logo-in-theme > .logo > a >').click()
        })

    });


    it('Remover produtos do carrinho', () => {

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
            method: 'GET',
            url: 'carrinho/*',
            query: {
                term: 'remove this item'
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
            removeProdutos.clicaRemover()
        removeProdutos.textProdut.contains('Ingsrid Running Jacket - S, Orange')

    })

})