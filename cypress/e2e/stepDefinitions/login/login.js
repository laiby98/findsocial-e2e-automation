import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import { LoginPage } from "../../pageObjects/loginPageObjects";

const loginPage = new LoginPage();
const user = Cypress.env('username'); // initializing the global email/username from cypress.config.js file
const password = Cypress.env('password'); // initializing the global password from cypress.config.js file
const invalidUsername = Cypress.env('invalidUsername');
const invalidPassword = Cypress.env('invalidPassword');

Given("I will land on find social website", () => {
  loginPage.visit("/"); // "/" is referring to base url
});

When("I click on login button", () => {
  loginPage.getLoginButton().should("exist").click();
});

Then("I should be able to see the login page", () => {
  cy.url().should("include", "findsocial.eu.auth0.com/u/login");
});

Then("I click on username placeholder and type username", () => {
  cy.log(user);
   loginPage.getusername().should("exist").click().clear().type(user);
});

Then("I click on password placeholder and type password", () => {
  loginPage.getpassword().should("exist").click().clear().type(password);
});

When("I will click on continue button", () => {
  loginPage.getcontinueButton().should("exist").click();
});

Then("I will be able to land on dashboard", () => {
  cy.url().should("include", "/home");
});

///////// Negative tests /////////

Then("I click on username placeholder and type invalid username", ()=>{
   loginPage.getusername().should("exist").click().clear().type(invalidUsername);
});

Then("I click on password placeholder and enter invalid password", ()=>{
   loginPage.getpassword().should("exist").click().clear().type(invalidPassword);
});

When("I click on continue button", () => {
  loginPage.getcontinueButton().should("exist").click();
});

Then("I can see validation message on screen", ()=>{
   loginPage.getvalidationMessage().should("exist");
});
