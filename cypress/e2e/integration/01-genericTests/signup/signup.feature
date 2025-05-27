Feature: FindSocial Dashboard Signup

    Validate the signup functionality of FindSocial Dashboard

    Scenario: Sign Page - Existing account
        Scenario Outline: Validating the existing account in sign up flow
            Given I am on find social website
            When I click on signup button
            Then I am able to see the login page
            Then I will click again on signup button
            Then I should be able to see the sign up page
            Then I will click on username placeholder and type username
            Then I will click on email placeholder and type email
            Then I will click on password placeholder and type password
            When I could be able to click on continue button
            Then I should see the validation message

   Scenario: Sign Page - positive test
       Scenario Outline: Validating the Sign up Page
            Given I am on find social website
            When I click on signup button
            Then I am able to see the login page
            Then I will click again on signup button
            Then I should be able to see the sign up page
            Then I will click on username placeholder and type new username
            Then I will click on email placeholder and type new email
            Then I will click on password placeholder and type new password
            When I could click on continue button
            Then I click on accept
            Then I will be able to land on buy plan page
            Then I will select free plan
            Then I will land on homepage