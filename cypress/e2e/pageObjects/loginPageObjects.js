const login = "/";
const getLoginButton = `[class="btn-main mr-2 res-mobile-none"]`;
const logo = '[id="prompt-logo-center"]';
const username = '[id="username"]';
const password = '[id="password"]';
const continueButton = '[name="action"]';
const validationMessage = '[class="ulp-input-error-message"]';

class LoginPage {

  visit() {
    return cy.visit(login);
  }

  getLoginButton() {
    return cy.get(getLoginButton);
  }

  getusername() {
    return cy.get(username);
  }

  getpassword() {
    return cy.get(password);
  }

  getcontinueButton() {
    return cy.get(continueButton);
  }

  getvalidationMessage(){
    return cy.get(validationMessage);
  }

}
export { LoginPage };
