describe('Legacy', () => {
  it('page-api', () => {
    for (let i = 0; i < 1000; i++) {

    Cypress.config('defaultCommandTimeout', 30000);

    cy.visit('https://ttb-test-tool.sit-paco.2c2p.com/subtenant')
    //Input MID
    cy.get('input[name="merchantId"]').clear().type('At n3ds');
    // Find and click the submit button
    cy.get(':nth-child(34) > :nth-child(2) > input').click();

    cy.wait(2000);

    // cy.get(':nth-child(1) > app-form-control > div > .global-form-control').type('4111111111111111')

    // cy.get(':nth-child(2) > app-form-control > div > .global-form-control').type('1223')

    // cy.get(':nth-child(3) > app-form-control > div > .global-form-control').type('123')

    // cy.get('.cardholder-name > app-form-control > div > .global-form-control').type('Cypress')

    // cy.get('.secondary-btn > .main-content-button').click()

    // cy.get('.secondary-btn > .main-content-button').click()

    // cy.get('.proceed').click()

    // cy.get('.form-control').type('123456')

    // cy.get('.acs-challenge-form-actions > .proceed').click()
    //Wait
    // cy.wait(1000);
    }
  })
})