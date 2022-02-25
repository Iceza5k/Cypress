/// <reference types="cypress" />
import { v4 as uuidv4 } from 'uuid';
const R1 = () => Cypress._.random(0, 1e8)
const d = new Date()  
const id = R1()
describe('NonUiPayment', () => {
  it('NonUIPayment', () => {
    cy.request({
      method: 'POST',
      url: 'https://core.sit-paco.2c2p.com/api/1.0/Payment/nonUi',
      headers: {
        'Content-Type': 'application/json',
        'apiKey': '9305a14c464448d88b5d89942a70e56a',
        'Host': 'core.sit-paco.2c2p.com',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive',
      },
      body: {
        "apiRequest": {
          "requestMessageID": uuidv4(),
          "requestDateTime": d,
          "language": "en-US"
        },
        "officeId": "Merchant1Office",
        "orderNo": id,
        "productDescription": "N-UI"+id,
        "paymentType": "CC",
        "paymentCategory": "ECOM",
        "creditCardDetails": {
          "cardNumber": "4706800000003105",
          "cardExpiryMMYY": "1223",
          "cvvCode": "909",
          "payerName": "Cypress"
        },
        "storeCardDetails": {
          "storeCardFlag": "N",
          "storedCardUniqueID": "string"
        },
        "installmentPaymentDetails": {
          "ippFlag": "N",
          "installmentPeriod": 10,
          "interestType": "C"
        },
        "mcpFlag": "N",
        "request3dsFlag": "N",
        "transactionAmount": {
          "amountText": "000000090000",
          "currencyCode": "THB",
          "decimalPlaces": 2,
          "amount": 900.0
        },
        "notificationURLs": {
          "confirmationURL": "http://example-confirmation.com",
          "failedURL": "http://example-failed.com",
          "cancellationURL": "http://example-cancellation.com",
          "backendURL": "http://example-backend.com"
        },
        "purchaseItems": [
          {
            "purchaseItemType": "ticket",
            "referenceNo": "2322460376026",
            "purchaseItemDescription": "Bundled insurance",
            "purchaseItemPrice": {
              "amountText": "000000999950",
              "currencyCode": "THB",
              "decimalPlaces": 2,
              "amount": 9999.5
            },
            "subMerchantID": "string",
            "passengerSeqNo": 1
          }
        ],
        "customFieldList": [
          {
            "fieldName": "remark",
            "fieldValue": "Test Remark"
          }
        ],
        "deviceDetails": {
          
        }
      }
    }).then(response => {
      expect(response.status).to.eq(200)
    })

  })
})
