Feature: Relevic Dashboard Login

    Validate the login functionality of Relevic Dashboard

    Scenario: Login Page - smoke test
        When I am on Login page
        Then Title on the page says "Relevic"
        Then I should be able to see Google SSO

    Scenario: Login with invalid credentials
        When I login with invalid credentials
        Then I should receive an error message

    Scenario: Login with valid credentials
        When I login with valid credentials
        Then I should be logged in successfully
        Then I should land on Campaign page