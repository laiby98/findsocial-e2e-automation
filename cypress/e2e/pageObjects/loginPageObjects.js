
const dashboard = "https://www.findsocial.io/";
const login = "/";
const emailPlaceholder = '[id="email"]';
const passwordPlaceholder = '[id="password"]';
const loginBtn = 'button[class="chakra-button css-lbsdsx"]';
const errorMessage = "p.chakra-text.css-19gpx6";
const googleSSOButton = "button[class='chakra-button css-14iurws']";

class LoginPage {
  visit() {
    cy.visit(dashboard);
  }
  getTitle() {
    return cy.title();
  }
}
export { LoginPage };
