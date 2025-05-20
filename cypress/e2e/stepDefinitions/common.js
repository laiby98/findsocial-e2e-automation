import { Before } from "@badeball/cypress-cucumber-preprocessor";

Before({ tags: "@LoginAsAdmin" }, () => {
  cy.authenticateUser();
});
