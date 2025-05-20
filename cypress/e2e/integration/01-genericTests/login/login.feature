Feature: Relevic Dashboard Login

    Validate the login functionality of Relevic Dashboard

    Scenario: Login Page - smoke test
        Scenario Outline: Validating the Login Page
            When I am on Login page
            Then Title on the page says "Relevic"
            Then I should be able to see Google SSO
