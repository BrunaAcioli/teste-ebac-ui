///<reference types="cypress"/>

describe( 'Funcionalidade: Login', () =>{
 
 it('Deve fazer login com sucesso', () =>{
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('#username').type('brunaacioli09@gmail.com')
    cy.get('#password').type('Bj180719*')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, brunaacioli09 (não é brunaacioli09? Sair)') 
 
 } )   
    
})
