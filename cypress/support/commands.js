// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('addProductToCart', (productName) => {
    // Click on the product by finding its text
    cy.contains(productName).click({force: true});
  
    // Wait for the loading animation to complete before adding the product to the cart
    cy.get('.loading').should('not.exist');
  
    // Add the product to the cart
    cy.get('.button-group button:nth-child(1)').each(($el) => {
      cy.wrap($el).click();
    });
  
    // Wait for the cart to update before proceeding
    cy.get('.alert').should('be.visible');
  });
  