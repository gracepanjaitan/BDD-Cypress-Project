const { Given, When, Then } = require("cypress-cucumber-preprocessor/steps");
const baseUrl = "https://www.saucedemo.com";

Given("I open the Saudcedome login page", () => {
  cy.visit(baseUrl);
});

Given(
  "I enter the username {string} and password {string}",
  (username, password) => {
    cy.get('[data-test="username"]').clear().type(username);
    cy.get('[data-test="password"]').clear().type(password);
  }
);

Given ("I click the login button", () => {
    cy.get('[data-test="login-button"]').click();
})

Given ("I should be redirected to the invetory page", () => {
    cy.url().should("include", '/inventory.html');
})

When ("I click add to cart", ()=> {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
})

When ("I click cart button", ()=> {
    cy.get('[data-test="shopping-cart-link"]').click();
})

When ("I click the remove button on {string}", (item)=> {
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
})

Then ("I got redirected to cart page", () => {
    cy.url().should("include", '/cart.html');
})

Then ("I found my product of {string} exist", (item) => {
    cy.get('[data-test="inventory-item-name"]').should('have.text', item);
})

Then ("The price is {string}", (price) => {
    cy.get('[data-test="inventory-item-price"]').should('have.text', price);
})

Then ("I found the remove button", () => {
    cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible');
})