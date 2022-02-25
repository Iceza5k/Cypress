/// <reference types="cypress" />
describe('ThaiSmileTrueMoney', () => {
    it('open test tools', () => {
        cy.visit('https://wepaymentuat.2c2p.com/TestSimulator/Index.aspx')
        cy.contains('AMADEUS Redirect Payment').click()
        cy.get('#EXTERNAL_ID2').type('AMAWETHB')
        cy.get('#EXTERNAL_ID10').type('SOCIAL_PAYMENT')
        cy.get('#EXTERNAL_ID11').type('TRUEMONEY')
        cy.get('#EXTERNAL_ID16').type('0008683501{enter}')
        cy.get('#OTP').type('111111')
        cy.contains('Verify').click()
    })
})
