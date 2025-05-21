const {
    Before,
    Given,
    When,
    Then,
  } = require("cypress-cucumber-preprocessor/steps");
  const baseUrl = "https://www.saucedemo.com";
  const username = "standard_user"
  const password = "secret_sauce"
  
  beforeEach(() => {
    Given("Admin login the website", () => {
      cy.visit(baseUrl);
      cy.get('[data-test="username"]').clear().type(username);
      cy.get('[data-test="password"]').clear().type(password);
      cy.get('[data-test="login-button"]').click();
      cy.url().should("include", "/inventory.html");
    });
  
    Then ("I add product to the cart and checkout it", () => {
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      cy.get('[data-test="shopping-cart-link"]').click();
      cy.url().should("include", "/cart.html");
      cy.get('[data-test="checkout"]').click()
      cy.url().should("include", "/checkout-step-one.html")
    })
  });
  
  When ("I do not fill any required field", () => {
      cy.get('[data-test="continue"]').click()
  })
  
  Then ("Alert message should be appears", () => {
      cy.get('[data-test="error"]', {timeout: 5000}).should('have.text', 'Error: First Name is required');
  })
  
  When  ("I fill all the required field", () => {
      cy.get('[data-test="firstName"]').should('be.visible').type("Jhon")
      cy.get('[data-test="lastName"]').should('be.visible').type("Doe")
      cy.get('[data-test="postalCode"]').should('be.visible').type("22413")
  })
  
  
  When  ("I can see the overview and finish the check out", () => {
      cy.get('[data-test="continue"]').click()
      cy.url().should("include", "/checkout-step-two.html")
      cy.get('[data-test="title"]').should('have.text', 'Checkout: Overview')
      cy.get('[data-test="finish"]').click()
      cy.url().should("include", "/checkout-complete.html")
      cy.get('[data-test="title"]').should('have.text', 'Checkout: Complete!')
  })