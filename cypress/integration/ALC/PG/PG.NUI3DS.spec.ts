/// <reference types="cypress" />
beforeEach(() => {
    cy.visit('https://pgpaymentuat.2c2p.com/TestSimulator/Index.aspx')
    cy.contains('Payment API (XML Non UI 3DS)').click()
})
describe('BKKAIR.CC', () => {
    it('BKKAIR.CC.APPROVE.INS', () => {
        cy.get('#MainContent_btnSumit').click()
        cy.get('#otp').type('123456')
        cy.get('#continue').click()
        cy.get('#txtResponse').should('include.text', '<ApiResponseCode>00</ApiResponseCode>')
    })
    it('BKKAIR.CC.APPROVE.NOINS', () => {

        cy.get('#MainContent_txtCardNo').clear().type(Cypress.env('card1'))
        cy.get('#MainContent_txtSubMer_Amount').clear().type('000000001000')
        cy.get('#MainContent_txtSubMer_Amount2').clear().type('000000000000')
        cy.get('#MainContent_btnSumit').click()
        cy.get('#otp').type('123456')
        cy.get('#continue').click()
        cy.get('#txtResponse').should('include.text', '<ApiResponseCode>00</ApiResponseCode>')
    })
    it('BKKAIR.CC.REJECT', () => {

        cy.get('#MainContent_txtCardNo').clear().type(Cypress.env('card2'))
        cy.get('#MainContent_btnSumit').click()
        cy.get('#txtResponse').should('include.text', '<ApiResponseCode>05</ApiResponseCode>')
    })
})
describe('BKKAIR.123ATM', () => {
    beforeEach(() => {

        cy.get('#MainContent_txtPaymentType').clear().type('123')
        cy.get('#MainContent_txtChannelCode').type('ATM')
    })
    it('BKKAIR.123.SCB.PENDING', () => {
        cy.get('#MainContent_txtAgentCode').type('SCB')
        cy.get('#MainContent_btnSumit').click()
    })
    it('BKKAIR.123.KBANK.PENDING', () => {
        cy.get('#MainContent_txtAgentCode').type('KBANK')
        cy.get('#MainContent_btnSumit').click()
    })
    it('BKKAIR.123.BBL.PENDING', () => {
        cy.get('#MainContent_txtAgentCode').type('BBL')
        cy.get('#MainContent_btnSumit').click()
    })
    it('BKKAIR.123.KTC.PENDING', () => {
        cy.get('#MainContent_txtAgentCode').type('KTB')
        cy.get('#MainContent_btnSumit').click()
    })
    it('BKKAIR.123.BAY.PENDING', () => {
        cy.get('#MainContent_txtAgentCode').type('BAY')
        cy.get('#MainContent_btnSumit').click()
    })
    it('BKKAIR.123.UOB.PENDING', () => {
        cy.get('#MainContent_txtAgentCode').type('UOB')
        cy.get('#MainContent_btnSumit').click()
    })


})
describe('BKKAIR.123COUNTER', () => {
    beforeEach(() => {

        cy.get('#MainContent_txtPaymentType').clear().type('123')
        cy.get('#MainContent_txtChannelCode').type('OVERTHECOUNTER')
    })
    it('BKKAIR.123COUNTER.TESCO.PENDING', () => {
        cy.get('#MainContent_txtAgentCode').type('TESCO')
        cy.get('#MainContent_btnSumit').click()
    })
    it('BKKAIR.123COUNTER.PAYATPOST.PENDING', () => {
        cy.get('#MainContent_txtAgentCode').type('PAYATPOST')
        cy.get('#MainContent_btnSumit').click()
    })
    it('BKKAIR.123COUNTER.BIGC.PENDING', () => {
        cy.get('#MainContent_txtAgentCode').type('BIGC')
        cy.get('#MainContent_btnSumit').click()
    })
    it('BKKAIR.123COUNTER.TRUEMONEY.PENDING', () => {
        cy.get('#MainContent_txtAgentCode').type('TRUEMONEY')
        cy.get('#MainContent_btnSumit').click()
    })
    it('BKKAIR.123COUNTER.MPAY.PENDING', () => {
        cy.get('#MainContent_txtAgentCode').type('MPAY')
        cy.get('#MainContent_btnSumit').click()
    })
    it('BKKAIR.123COUNTER.TOT.PENDING', () => {
        cy.get('#MainContent_txtAgentCode').type('TOT')
        cy.get('#MainContent_btnSumit').click()
    })
})