const {
    Before,
    Given,
    When,
    Then,
  } = require("cypress-cucumber-preprocessor/steps");
  const baseUrl = "https://www.saucedemo.com";
  
  beforeEach(() => {
    Given("I open the Saudcedome login page", () => {
      cy.visit(baseUrl);
    });
  });
  
  When(
    "I enter the username {string} and password {string}",
    (username, password) => {
      cy.get('[data-test="username"]').clear().type(username);
      cy.get('[data-test="password"]').clear().type(password);
    }
  );
  
  When("I enter only the username {string}", (username) => {
    cy.get('[data-test="username"]').clear().type(username);
  });
  
  When("I enter only the password {string}", (password) => {
    cy.get('[data-test="password"]').clear().type(password);
  });
  
  When("I click the login button", () => {
    cy.get('[data-test="login-button"]').click();
  });
  
  Then("I should be redirected to the invetory page", () => {
    cy.url().should("include", "/inventory.html");
  });
  
  Then("Showing error message that username is required", () => {
    cy.get('[data-test="error"]').should(
      "have.text",
      "Epic sadface: Username is required"
    );
  });
  
  Then("Showing error message that creds is invalid", () => {
    cy.get('[data-test="error"]').should(
      "have.text",
      "Epic sadface: Username and password do not match any user in this service"
    );
  });
  
  Then("Showing error message that password is required", () => {
    cy.get('[data-test="error"]').should(
      "have.text",
      "Epic sadface: Password is required"
    );
  });
  