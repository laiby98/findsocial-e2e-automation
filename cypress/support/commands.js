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

require("@4tw/cypress-drag-drop");
import "@4tw/cypress-drag-drop";
import "cypress-file-upload";
import { LoginPage } from "../e2e/pageObjects/loginPageObjects";


const loginPage = new LoginPage();


const validEmail = Cypress.env("email");
const validPass = Cypress.env("password");

//Custom command for authenticator hook
Cypress.Commands.add("authenticateUser", () => {
  loginPage.visit();
  loginPage.getTitle().then(() => {
    loginPage.emailPlaceholder().type(validEmail);
    loginPage.passwordPlaceholder().type(validPass);
    loginPage
      .loginButton()
      .click()
      .then(() => {
        loginPage.getUrl().should("include", "features/campaigns");
      });
  });
});