///<reference types="Cypress" />
import "cypress-file-upload";

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import { Settings } from "../../pageObjects/settingsPageObjects";

const settings = new Settings();
const validUsername = Cypress.env("username");
const filePath = "../resources/avatar.jpeg";

Given("I should be present on campaigns page", () => {
  settings.getUrl().should("include", "features/campaigns");
});

Then("I click on Skip button", () => {
  cy.wait(1000);
  settings.getSkipBtn().click();
});

When("I click on settings page", () => {
  cy.get(".css-1l58s0j > :nth-child(1) > .chakra-stack").click();
  //settings.getSettingsTab().click();
});

Then("I should able to see settings page", () => {
  settings.getUrl().should("include", "features/settings");
});

Then("I enter the Username", () => {
  settings
    .usernamePlaceholder()
    .click()
    .clear()
    .type(validUsername + " Updated");
});

Then("I upload the image avatar", () => {
  settings.getUploadBtn().attachFile(filePath, {
    subjectType: "input",
  });
  cy.log("Image Uploaded");
});

Then("I click on {string} button", () => {
  settings.getSaveBtn().click();
});

Then("I should be able to see success banner", () => {
  settings.getSuccessBanner().should("be.visible");
});
