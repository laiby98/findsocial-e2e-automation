///<reference types="Cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import { LoginPage } from "../../pageObjects/loginPageObjects";

const validEmail = Cypress.env("email");
const validPass = Cypress.env("password");

const loginPage = new LoginPage();

When("I am on Login page", () => {
  loginPage.visit();
});

Then("Title on the page says {string}", () => {
  loginPage.getTitle().should("include", "Relevic");
});

When("I login with invalid credentials", () => {
  loginPage.emailPlaceholder().type(validEmail + "invalid");
  loginPage.passwordPlaceholder().type(validPass + "invalid");
  loginPage.loginButton().click({ force: true });
});

Then("I should receive an error message", () => {
  cy.wait(1000);
  loginPage.errorMessage().should("have.text", "User does not exist");
  cy.reload();
});

When("I login with valid credentials", () => {
  loginPage.emailPlaceholder().type(validEmail);
  loginPage.passwordPlaceholder().type(validPass, { log: false });

  loginPage.loginButton().click({ force: true });
});

Then("I should be logged in successfully", () => {
  loginPage.getUrl().should("exist");
});

Then("I should land on Campaign page", () => {
  loginPage.getUrl().should("include", "features/campaigns");
});

Then("I should be able to see Google SSO", () => {
  loginPage.googleSSOButton().contains("Sign in with Google").and("be.visible");
});
