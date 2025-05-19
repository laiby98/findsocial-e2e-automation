///<reference types="Cypress" />

const billingTab = ".css-1l58s0j > :nth-child(2) > .chakra-stack";
const currentPlanSection = 'div[class="chakra-stack css-7mjhjv"]';
const pricingSlider = '[role="slider"]';
const updatedPrice = 'h2[class="chakra-heading css-1lfg5k1"]';
const changePlanBtn = "div[class='css-1wbetmt'] button[type='button']";
const failureBanner = '[data-status="error"]';
const addPaymentBtn = `div[class='css-1rc5qq2'] button:nth-child(1)`;
const paymentModal = '[id="chakra-modal-:r8:"]';
const cardNumber = '[id="Field-numberInput"]';
const expiryDate = '[id="Field-expiryInput"]';
const cvcInput = '[id="Field-cvcInput"]';
const countryInput = '[id="Field-countryInput"]';
const submitPaymentDetails = `button[type='submit']`;

class Billing {
  getUrl() {
    return cy.url();
  }

  getBillingTab() {
    return cy.get(billingTab);
  }

  getCurrentPlan() {
    return cy.get(currentPlanSection);
  }

  getSlider() {
    return cy.get(pricingSlider);
  }

  getPrice() {
    return cy.get(updatedPrice);
  }
  changePlanButton() {
    return cy.get(changePlanBtn);
  }

  failureBanner() {
    return cy.get(failureBanner);
  }

  addPaymentBtn() {
    return cy.get(addPaymentBtn);
  }

  paymentModal() {
    return cy.get(paymentModal);
  }

  cardNumber() {
    return cy.get(cardNumber);
  }
  expiryDate() {
    return cy.get(expiryDate);
  }
  cvcInput() {
    return cy.get(cvcInput);
  }
  countryInput() {
    return cy.get(countryInput);
  }
  submitPaymentDetails() {
    return cy.get(submitPaymentDetails);
  }
}
export { Billing };
