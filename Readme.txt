#E2E Test - Purchase Flow Readme

This repository contains an End-to-End (E2E) test suite for a web application's purchase flow. The test case described in this readme focuses on adding two products to the cart, completing the guest checkout process, and placing an order.

#Test Description

The E2E test case is written using Cypress, a popular JavaScript-based end-to-end testing framework. The test simulates the following user actions on the web application:

#Visit the Website

Before each test, the test script visits the homepage of the web application using cy.visit('/').

#Add Products to Cart
The test script adds two products, an 'iPhone' and a 'MacBook,' to the cart using the cy.addProductToCart() function.

#View Cart
It then clicks on the cart icon to view the cart's contents and ensure the new page is fully loaded before proceeding.

#Checkout Process

The checkout process involves the following steps:
a. Checkout Page
The test script clicks on the 'Checkout' button to proceed with the checkout process.
b. Guest Checkout
On the Guest Checkout page, the user chooses to proceed as a guest and not login with an account.
c. Fill in Billing Details
The user fills in the billing details required for the order using the fillBillingDetails() function. The function provides the necessary information such as first name, last name, email, telephone, address, city, postal code, country, and zone.
d. Continue to Next Steps
The user continues to the next steps, including the delivery method and payment method.
e. Confirm Order
The user confirms the order after selecting the preferred payment method.

#Verify Order Placement
The test script verifies whether the order placement is successful by checking for a success message that should display: "Your order has been placed!"

#How to Run the Test

Clone or download this repository to your local machine.
Make sure you have Node.js and NPM (Node Package Manager) installed on your system.
Install the Cypress testing framework globally by running the following command in your terminal:

npm install -g cypress
Navigate to the project directory containing the Cypress test files.
Run the Cypress test using the following command:
cypress open
The Cypress Test Runner will open, and you will see a list of available test files. Click on the purchase_flow_spec.js file to execute the E2E test.

#Note

Before running the test, make sure the web application is accessible at the specified URL (base URL), and the products 'iPhone' and 'MacBook' are available for purchase on the website.

Please ensure that the web application is in the expected state and the test data is appropriately set up to avoid any unexpected test failures.