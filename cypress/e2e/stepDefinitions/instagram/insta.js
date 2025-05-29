import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import { InstaPage } from "../../pageObjects/instaPageObjects";

const instaPage = new InstaPage();
const keyword = "test";

Given("I will be on find social homepage", () => {
  cy.url().should("include", "https://dev.findsocial.io/home");
});

When("I click on select instagram button", () => {
  instaPage.getselectInsta().should("exist").click();
});

Then("I will land on instagram scrapper", () => {
  cy.url().should("include", "/instagram-dashboard");
});

When("I will click and type on search button", () => {
  instaPage.getsearchField().should("exist").click().type(keyword);
});

Then("I will click on search button", () => {
  instaPage.getsearchButton().should("exist").click();
});

Then("I will click on check bot", () => {
  instaPage.getcheckBot().should("exist").click();
});

Then("I will check the searches keyword status", ()=>{
   instaPage.getkeywordStatus().should("exist");
});

