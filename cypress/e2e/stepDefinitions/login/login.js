import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import { LoginPage } from "../../pageObjects/loginPageObjects";

const validEmail = Cypress.env("email");
const validPass = Cypress.env("password");

const loginPage = new LoginPage();

Given ("I am on Login page", () => {
  loginPage.visit();
});

/*Then("Title on the page says {string}", () => {
  loginPage.getTitle().should("include", "Relevic");
});*/
