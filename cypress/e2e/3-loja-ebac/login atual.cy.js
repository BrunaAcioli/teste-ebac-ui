///<reference types="cypress"/>

const perfil = require("../../fixtures/perfil.json")

describe('Funcionalidade: Login', () => {

  beforeEach(() => {
    cy.visit('/minha-conta')
  })

  afterEach(() => {
    cy.screenshot()
  })

  it('Deve fazer login com sucesso', () => {
    cy.get('#username').type('brunaacioli09@gmail.com')
    cy.get('#password').type('Bj180719*')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-MyAccount-content')
      .should('contain', 'Olá, brunaacioli09')
  })

  it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
    cy.get('#username').type('trem.amor@gmail.com')
    cy.get('#password').type('Bj180719*')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error').should('exist')
  })

  it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
    cy.get('#username').type('brunaacioli09@gmail.com')
    cy.get('#password').type('mj050409-')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error')
      .should('contain', 'senha fornecida')
  })

  it('Deve fazer login com sucesso - Usando massa de dados', () => {
    cy.get('#username').type(perfil.usuário)
    cy.get('#password').type(perfil.senha)
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-MyAccount-content')
      .should('contain', 'Olá, brunaacioli09')
  })

  it.only('Deve fazer login com sucesso - Usando Fixture', () => {
    cy.fixture('perfil').then(dados => {
      cy.get('#username').type(dados.usuário , {log: false})
      cy.get('#password').type(dados.senha , {log: false})
      cy.get('.woocommerce-form > .button').click()

      cy.get('.woocommerce-MyAccount-content')
        .should('contain', 'Olá, brunaacioli09')
    })
  })

})
