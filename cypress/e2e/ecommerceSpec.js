describe('E2E Test - Purchase Flow', () => {
  beforeEach(() => {
   cy.visit('/');
  });

  it('should add two products to the cart, complete guest checkout, and place an order', () => {

    cy.addProductToCart('iPhone');
    cy.addProductToCart('MacBook');

    // View the cart
    cy.get('#cart-total').click({ force: true });
    cy.wait(1000);
    cy.contains('View Cart').click({ force: true });
    cy.url().should('include', '/index.php?route=checkout/cart');

    // Ensure that the new page is fully loaded before proceeding
    cy.get('#cart-total').should('be.visible');;

    // Click on Checkout button
    cy.contains('Checkout').click({ force: true });

    // Wait for the new page to fully load before proceeding
    //cy.wait('@checkoutLoaded');
    
    // Guest Checkout - Fill in billing details
    cy.contains('Guest Checkout').click({ force: true });
    fillBillingDetails();

    // Continue to the next step
    cy.get('#button-guest').click({force: true});

    // Wait for the new page to fully load before proceeding
//    cy.wait('@shippingLoaded');

    // Delivery method and continue
    //cy.get('[name="shipping_method"]').first().check();
    //cy.get('[type="checkbox"]').check();
    cy.get('#button-shipping-method').click();

    // Wait for the new page to fully load before proceeding
    //cy.wait('@paymentLoaded');

    // Payment method and continue
    //cy.get('[name="payment_method"]').first().check();
    cy.get('[name="agree"]').click();
    cy.get('#button-payment-method').click();

    // Wait for the new page to fully load before proceeding
    //cy.wait('@confirmLoaded');

    // Confirm order
    cy.get('#button-confirm').click();

    // Verify the success message
    cy.contains('Your order has been placed!').should('be.visible');
    
  });
});

function fillBillingDetails() {
  cy.get('#button-account').click();
  cy.get('#input-payment-firstname').type('John');
  cy.get('#input-payment-lastname').type('Doe');
  cy.get('#input-payment-email').type('john.doe@example.com');
  cy.get('#input-payment-telephone').type('1234567890');
  cy.get('#input-payment-address-1').type('123 Main Street');
  cy.get('#input-payment-city').type('New York');
  cy.get('#input-payment-postcode').type('10001');
  cy.get('#input-payment-country').select('United States');
  cy.get('#input-payment-zone').select('New York');
}
