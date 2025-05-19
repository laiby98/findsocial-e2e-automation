Feature: Relevic Dashboard Settings
    Validate the Settings Page of Relevic Dashboard

    @LoginAsAdmin
    Scenario: Update the basic user profile information
        Given I should be present on campaigns page
        When I click on settings page
        Then I should able to see settings page
        Then I enter the Username
        Then I upload the image avatar
        # Then I click on delete avatar
        # Then I upload the image avatar
        Then I click on "Save Changes" button

    Scenario: Adding Team Member with invalid email
        Given I am on settings page
        When I click on Team Members tab
        Then I add new team member with invalid email
        Then I click on "Add Team Member" Button
        Then I should be able to see failure banner

    Scenario: Adding Team Member with valid email
        Given I am on team members page
        When I add new team member with valid email
        Then I click on "Add Team Member" Button
        Then I should be able to see success banner for adding new user
        Then I reload the page

    Scenario: Adding an existing member
        Given I am on settings page
        When I click on Team Members tab
        When I add new team member with valid email
        Then I click on "Add Team Member" Button
        Then I should be able to see failure banner

    Scenario: Updating the invited member role
        Given I am on team members page
        Then I click on member role and I select designer as a role
        Then I click on "Save Changes" button for role change
        Then I should be able to see success banner

    Scenario: Deleting the recently invited member
        Given I am on team members page
        When I select the last added member and click delete button
        Then The member should be removed from the table