Feature: FindSocial Dashboard Login

    Validate the login functionality of FindSocial Dashboard

    Scenario: Login Page - smoke test
        Scenario Outline: Validating the Login Page
            Given I will land on find social website
            When I click on login button
            Then I should be able to see the login page

        Scenario Outline: Validating the login with negative test cases    
            Then I click on username placeholder and type invalid username
            Then I click on password placeholder and enter invalid password
            When I click on continue button
            Then I can see validation message on screen

        Scenario Outline: Validating the login with positive test cases
            Then I click on username placeholder and type username
            Then I click on password placeholder and type password
            When I will click on continue button
            Then I will be able to land on dashboard

