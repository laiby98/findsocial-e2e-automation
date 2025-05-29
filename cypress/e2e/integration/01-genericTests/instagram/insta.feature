Feature: FindSocial instagram scrapper

    Validate the scarpping of instagram functionality on FindSocial Dashboard
    @LoginAsAdmin
    Scenario: Insta scrapping - smoke test
        Scenario Outline: Validating the Instagram scrapper
            Given I will be on find social homepage
            When I click on select instagram button
            Then I will land on instagram scrapper
            When I will click and type on search button
            Then I will click on search button 
            Then I will click on check bot
            Then I will check the searches keyword status