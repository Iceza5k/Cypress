const { v4: uuidv4 } = require('uuid');
describe('POST Request', () => {
  it('Sends a POST request with JSON body from file', () => {
    for (let i = 0; i < 100; i++) {
    cy.fixture('body.json').then((body) => {
      const isoTimestamp = new Date().toISOString();
      const newGuid = uuidv4();
      const neworderno = Math.floor(Math.random() * 100000) + 1;
      body.apiRequest.requestMessageID = newGuid;
      body.apiRequest.requestDateTime = isoTimestamp;
      body.orderNo = neworderno;
      cy.request({
        method: 'POST',
        url: 'https://core.demo-paco.2c2p.com/api/1/Payment/prePaymentUi', // Replace with your API URL
        headers: {
          'Content-Type': 'application/json',
          'apiKey':'709d466ca455493197227f7051eab3c0'
          // Add any other headers you might need
        },
        body: body, // Use the loaded JSON from the file
      }).then((response) => {
        console.log('API Response:', response);
        // Assertions on the response if needed
        expect(response.status).to.equal(200); // Example assertion
        console.log('Response status:', response.status);
        console.log('Response body:', response.body);
        cy.visit(response.body.data.paymentPage.paymentPageURL);
        cy.wait(3000);
      });
      // cy.get(':nth-child(1) > app-form-control > div > .global-form-control').type('4111111111111111')

      // cy.get(':nth-child(2) > app-form-control > div > .global-form-control').type('1223')

      // cy.get(':nth-child(3) > app-form-control > div > .global-form-control').type('123')

      // cy.get('.cardholder-name > app-form-control > div > .global-form-control').type('Cypress')

      // cy.get('.secondary-btn > .main-content-button').click()

      // cy.get('.secondary-btn > .main-content-button').click()

      // cy.get('.proceed').click()

      // cy.get('.form-control').type('123456')

      //cy.get('.acs-challenge-form-actions > .proceed').click()
    });
  }
  });
});