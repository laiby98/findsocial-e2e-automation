///<reference types="Cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import "../../../support/commands.js";
import { Settings } from "../../pageObjects/settingsPageObjects";

const invalidEmail = "qa(at)relevic.com";
const validEmail = Cypress.env("email");
const invitedMember = `invite_` + validEmail;
const settings = new Settings();

Given("I am on settings page", () => {
  settings.getUrl().should("include", "features/settings");
});

When("I click on Team Members tab", () => {
  settings.getTeamBtn().click();
});

Then("I add new team member with invalid email", () => {
  settings.addEmailPlaceholder().type(invalidEmail);
});

Then("I add new team member with valid email", () => {
  settings.addEmailPlaceholder().clear().type(invitedMember);
});

Then("I click on {string} Button", () => {
  settings
    .addMemberBtn()
    .should("have.text", "Add Team Member")
    .then(() => {
      settings.addMemberBtn().click();
    });
});

Then("I should be able to see failure banner", () => {
  settings.getFailureBanner().should("be.visible");
});

Given("I am on team members page", () => {
  settings
    .getUrl()
    .should("include", "features/settings")
    .then(() => {
      settings.membersTable().should("exist").and("contain", validEmail);
    });
});

Then("I should be able to see success banner for adding new user", () => {
  settings.getSuccessBanner().should("be.visible");
  cy.wait(8000);
});

Then("I click on member role and I select designer as a role", () => {
  cy.changeRoleForMember(invitedMember, "Designer");
  cy.wait(4000);
});

Then("I click on {string} button for role change", () => {
  settings.getSaveRoleBtn().click();
  cy.log("Member Role Changed Successfully!");
});

When("I select the last added member and click delete button", () => {
  cy.deleteUserByEmail(invitedMember);
});

Then("The member should be removed from the table", () => {
  settings.membersTable().should("exist").and("not.contain", invitedMember);
});

Then("I reload the page", () => {
  cy.reload();
});
