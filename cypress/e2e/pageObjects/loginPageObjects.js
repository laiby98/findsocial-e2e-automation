/// <reference types="Cypress" />

const login = "/";
const emailPlaceholder = '[id="email"]';
const passwordPlaceholder = '[id="password"]';
const loginBtn = 'button[class="chakra-button css-lbsdsx"]';
const errorMessage = "p.chakra-text.css-19gpx6";
const googleSSOButton = "button[class='chakra-button css-14iurws']";

class LoginPage {
  visit() {
    cy.visit(login);
  }
  getTitle() {
    return cy.title();
  }

  emailPlaceholder() {
    return cy.get(emailPlaceholder);
  }

  passwordPlaceholder() {
    return cy.get(passwordPlaceholder);
  }

  loginButton() {
    return cy.get(loginBtn);
  }

  errorMessage() {
    return cy.get(errorMessage);
  }
  getUrl() {
    return cy.url();
  }

  googleSSOButton() {
    return cy.get(googleSSOButton);
  }
}
export { LoginPage };
