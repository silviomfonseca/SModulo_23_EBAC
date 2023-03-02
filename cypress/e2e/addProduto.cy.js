/// <reference types="cypress" />


import {
    productSearchPage, clicaSpace, adicionaProdutoPage,
    sizeProdutoPage, colorProdutoPage, skuProdutoPage, adicionaComprarPage
} from '../support/pages'

const data = require('../fixtures/data.json')
const perfil = require('../fixtures/perfil.json')


describe('Login', () => {
    before(() => {
        cy.visit('my-account/')
        cy.fixture('perfil').then(dados => {
            cy.login(perfil.email, perfil.senha)
            cy.get('.logo-in-theme > .logo > a >').click()
        })

    });

    it('PEsquisar produtos', () => {
        cy.intercept({
            method: 'GET',
            url: '/wp-admin/admin-ajax*',
            query: {
                term: 'Jacket'
            }
        }, req => {
            req.reply(
                {
                    statusCode: 200,
                    body: `${req.query.callback}(
                        ${JSON.stringify(
                        data.autocompleteSearchData
                    )}
                    )`
                }

            )
        }),

            clicaSpace.searchMagnifier()
        productSearchPage.search('Jacket')
        productSearchPage.productList.first().should('have.attr', 'title', 'Ingrid Running Jacket')
    })

    it('Incluri item carrinho de compra', () => {

        cy.intercept({
            method: 'GET',
            url: '/prodcut/ingrid-running-jacket*',
            query: {
                term: 'ingrid-running-jacket'
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
            adicionaProdutoPage.clicaProduto()


        cy.intercept({
            method: 'POST',
            url: 'wp-admin/admin-ajax*',
            query: {
                term: 'S'
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

            sizeProdutoPage.clicaSize()

        cy.intercept({
            method: 'POST',
            url: 'wp-admin/admin-ajax*',
            query: {
                term: 'Orange'
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
            colorProdutoPage.clicaColor()
        skuProdutoPage.skuType.contains('WJ04-S-Orange')

        cy.intercept({
            method: 'POST',
            url: 'product/ingrid-running-jacket*',
            query: {
                term: 'Comprar'
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

            adicionaComprarPage.clicaComprar()
        adicionaComprarPage.textComprar.contains('em estoque')
        adicionaComprarPage.clicaConfere()

    });

})












