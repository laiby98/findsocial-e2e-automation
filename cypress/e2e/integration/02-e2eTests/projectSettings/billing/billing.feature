Feature: Billing Feature on Relevic Dashboard

    Validate the billing functionality

    @LoginAsAdmin
    # Scenario: Updating the billing plan without card payment details
    #     When I click on "Billing" tab
    #     Then The billing status should be "active"
    #     When I change the plan to "25,000" pageviews
    #     Then I click on Change Plan button
    #     Then I should see the failure banner

    Scenario: Updating the billing plan to $29/Month with valid card payment details
        Given I am present on billing page
        Then The billing status should be "active"
        When I click on Add Payment Details button
        Then I should see stripe payment modal
        Then I add valid payment details and submit form
        Then I should see the success banner
        When I change the plan to "25,000" pageviews
        Then I click on Change Plan button
        When I should see the success message for changing the plan
        Then I should see "Allowed Pageviews" and "Amount" fields are updated with new values

# Scenario: Updating the billing plan to $49/Month with valid card payment details
#     Given I am present on billing page
#     Then The billing status should be "active"
#     Then I click on "Add Payment Details" button
#     Then I add valid  payment details and submit form
#     Then I should see the success banner
#     When I change the plan to "50,000" pageviews
#     Then I click on "Change Plan" button
#     When I should see the success message for changing the plan
#     Then I should see "Allowed Pageviews" and "Amount" fields are updated with new values

# Scenario: downgrading the billing plan to Free with valid card payment details
#     Given I am present on billing page
#     Then The billing status should be "active"
#     Then I click on "Add Payment Details" button
#     Then I add valid  payment details and submit form
#     Then I should see the success banner
#     When I change the plan to "10,000" pageviews
#     Then I click on "Change Plan" button
#     Then I should see the confirmation modal
#     Then I click on "Confirm" Button
#     When I should see the success message for changing the plan
#     Then I should see paid subscription cancellation banner
#     Then I should see "Allowed Pageviews" and "Amount" fields are updated with new values