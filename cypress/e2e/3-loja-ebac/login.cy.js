///<reference types="cypress"/>

describe( 'Funcionalidade: Login', () =>{

 beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
 });   

 afterEach(() => {
    cy.screenshot()
 });
 
 it('Deve fazer login com sucesso', () =>{
    cy.get('#username').type('brunaacioli09@gmail.com')
    cy.get('#password').type('Bj180719*')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, brunaacioli09 (não é brunaacioli09? Sair)') 

 } )   

 it('Deve exibir uma mensagem de erro ao  inserir usuário inválido', () => {
    cy.get('#username').type('trem.amor@gmail.com')
    cy.get('#password').type('Bj180719*')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error'). should('exist')
 });
    
 it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
    cy.get('#username').type('brunaacioli09@gmail.com')
    cy.get('#password').type('mj050409-')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error').should('contain' , 'Erro: A senha fornecida para o e-mail brunaacioli09@gmail.com está incorreta. Perdeu a senha?')
    cy.get('.woocommerce-error'). should('exist')
    
 });
})
