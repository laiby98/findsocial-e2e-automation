///<reference types="Cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import { Billing } from "../../pageObjects/billingPageObject";

const billing = new Billing();
const validCreditCardNo = Cypress.env("validCreditCardNo");
const validCvc = Cypress.env("validCvc");
const validExpiryDate = Cypress.env("validExpiryDate");
let sliderValue;

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

beforeEach(() => {
  cy.intercept(`https://r.stripe.com/0`, (req) => {
    req.headers["origin"] = "https://js.stripe.com";
    req.headers["referer"] = "https://js.stripe.com/";
  });
});

When("I click on {string} tab", () => {
  billing.getBillingTab().click();
});

Then("The billing status should be {string}", () => {
  billing.getCurrentPlan().should("contain", "Status: active");
});

When("I change the plan to {string} pageviews", () => {
  billing
    .getSlider()
    .invoke("attr", "aria-valuenow") // Retrieve the initial value
    .then((initialValue) => {
      sliderValue = Number(initialValue) + 1; // Increment the initial value by one
      cy.log(`Initial slider value is: ${initialValue}`);

      return billing
        .getSlider()
        .type("{rightarrow}", { times: 1 })
        .should("have.attr", "aria-valuenow", sliderValue.toString()); // Assert for the incremented value
    })
    .then(() => {
      if (sliderValue == 0) {
        billing.getPrice().should("have.text", "$0");
      } else if (sliderValue == 1) {
        billing.getPrice().should("have.text", "$29");
      } else if (sliderValue == 2) {
        billing.getPrice().should("have.text", "$49");
      } else if (sliderValue == 3) {
        billing.getPrice().should("have.text", "$89");
      } else if (sliderValue == 4) {
        billing.getPrice().should("have.text", "$199");
      } else if (sliderValue == 5) {
        billing.getPrice().should("have.text", "$399");
      } else if (sliderValue == 6) {
        billing.getPrice().should("have.text", "$699");
      }
    });
});

Then("I click on Change Plan button", () => {
  billing.changePlanButton().should("contain", "Change Plan").click();
});

Then("I should see the failure banner", () => {
  billing.failureBanner().should("exist");
});

Given("I am present on billing page", () => {
  billing.getUrl().should("contain", "features/billing");
});

When("I click on Add Payment Details button", () => {
  billing.addPaymentBtn().should("have.text", "Add Payment Details").click();
});

Then("I should see stripe payment modal", () => {
  cy.wait(10000);
  function getCardField(selector, attempts = 0) {
    Cypress.log({
      displayName: "getCardField",
      message: `${selector}: ${attempts}`,
    });

    if (attempts > 50) throw new Error("too many attempts");

    return cy
      .get("iframe", { timeout: 10_000, log: false })
      .eq(1, { log: false })
      .its("0.contentDocument", { log: false })
      .find("body", { log: false })
      .then((body) => {
        const cardField = body.find(selector);
        if (!cardField.length) {
          return cy.wait(300, { log: false }).then(() => {
            getCardField(selector, ++attempts);
          });
        } else {
          return cy.wrap(cardField);
        }
      });
  }
});

Then("I add valid payment details and submit form", () => {
  cy.get('iframe[name="__privateStripeMetricsController6470"]')
    .iframe()
    .find("body")
    .should("be.visible");
});
