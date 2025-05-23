const signup = "/";
const signupButton = '[class="btn-main btn-background landing-button-signup res-mobile-none"]';
const signUpButton = '[class="c70dd064f c3ebcfad9"]';
const username = '[id="username"]';
const email = '[id="email"]';
const password = '[id="password"]';
const contButton = '[name="action"]';
const accept = '[value="accept"]';
const validationMsg = '[class="c5edff0e0 cd4f7fa59"]';


class Signup {

  visit() {
    return cy.visit(signup);
  }

  getsignupButton() {
    return cy.get(signupButton);
  }

  getsignUpButton() {
    return cy.get(signUpButton);
  }

  getusername() {
    return cy.get(username);
  }

  getemail() {
    return cy.get(email);
  }

  getpassword() {
    return cy.get(password);
  }

  getButton() {
    return cy.get(contButton);
  }

  getvalidationMsg() {
    return cy.get(validationMsg);
  }

  getaccept() {
    return cy.get(accept);
  }


}
export { Signup };
