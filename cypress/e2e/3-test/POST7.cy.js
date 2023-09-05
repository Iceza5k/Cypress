const { v4: uuidv4 } = require('uuid');
describe('POST Request', () => {
  it('Sends a POST request with JSON body from file', () => {
    for (let i = 0; i < 100; i++) {
    cy.fixture('body.json').then((body) => {
      const isoTimestamp = new Date().toISOString();
      const newGuid = uuidv4();
      body.apiRequest.requestMessageID = newGuid;
      body.apiRequest.requestDateTime = isoTimestamp;
      cy.request({
        method: 'POST',
        url: 'https://core.demo-paco.2c2p.com/api/1/Payment/prePaymentUi', // Replace with your API URL
        headers: {
          'Content-Type': 'application/json',
          'apiKey':'bf474356f3094fb5b1830d4098352e9c'
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
    });
  }
  });
});
