import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import { Signup } from "../../pageObjects/signupPageObjects";

const signUp = new Signup();
const newUser = Cypress.env('newUser'); // initializing the global email/username from cypress.config.js file
const newEmail = Cypress.env('newEmail'); 
const newPass = Cypress.env('newPass'); 

Given("I am on find social website", () => {
  signUp.visit("/");       // "/" is referring to base url
});

When("I click on signup button", () => {
  signUp.getsignupButton().should("exist").click();
});

Then("I am able to see the login page", () => {
  cy.url().should("include", "findsocial.eu.auth0.com/u/login");
});

Then("I will click again on signup button", () => {
  signUp.getsignUpButton().should("exist").click();
});

Then("I should be able to see the sign up page", () => {
  cy.url().should("include", "https://findsocial.eu.auth0.com/u/signup");
});

Then("I will click on username placeholder and type username", () => {
  signUp.getusername().should("exist").click().type(newUser);
});

Then("I will click on email placeholder and type email", () => {
  signUp.getemail().should("exist").click().type(newEmail);
});

Then("I will click on password placeholder and type password", () => {
  signUp.getpassword().should("exist").click().type(newPass);
});

When("I could be able to click on continue button", () => {
  signUp.getButton().should("exist").click();
});

Then("I click on accept", () => {
  signUp.getaccept().should("exist").click();
});

Then("I will be able to land on buy plan page", () => {
  cy.url().should("include", "/subscription-plan");
});