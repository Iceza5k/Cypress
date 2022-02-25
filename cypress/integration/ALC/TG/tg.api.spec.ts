/// <reference types="cypress" />
describe('ApiKbank', () => {
  it('KBANK', () => {
    var i = 0;
    for (i = 0; i < 1; i++) {
      cy.visit('https://tgpaymentuat.2c2p.com/TestSimulator/')
      cy.contains('Redirect Payment (XML)').click()
      cy.get('#MainContent_txtOfficeID').type('2C2PYOK')
      cy.get('#MainContent_btnSumit').click()
      cy.get('#credit_card_number').type('4111111111111111')
      cy.get('#credit_card_holder_name').type('tanut')
      cy.get('#credit_card_expiry_month').select('01')
      cy.get('#credit_card_expiry_year').select('2025')
      cy.get('#credit_card_cvv').type('123')
      cy.get('#credit_card_issuing_bank_country').select('THAILAND')
      cy.get('#credit_card_issuing_bank_name').type('SCB{enter}')
    }
  })
})
describe('Api2C2P', () => {
  it('2C2P', () => {
    var i = 0;
    for (i = 0; i < 1; i++) {
      cy.visit('https://tgpaymentuat.2c2p.com/TestSimulator/')
      cy.contains('Redirect Payment (XML)').click()
      cy.get('#MainContent_txtOfficeID').type('WEBLOUNGE')
      cy.get('#MainContent_btnSumit').click()
      cy.get('#credit_card_number').type('4111111111111111')
      cy.get('#credit_card_holder_name').type('tanut')
      cy.get('#credit_card_expiry_month').select('01')
      cy.get('#credit_card_expiry_year').select('2025')
      cy.get('#credit_card_cvv').type('123')
      cy.get('#credit_card_issuing_bank_country').select('THAILAND')
      cy.get('#credit_card_issuing_bank_name').type('SCB{enter}')
      cy.get('#otp').type('123456')
      cy.get('#continue').click()
    }
  })
})