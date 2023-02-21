Feature: E2E E-commerce validation

    Application Regression

    @Regression
    Scenario: E-commerce product delivery
    Given I open E-commerce page
    When I add items to the cart
    And Validate the total price
    Then I select the country, submit and verify ThankYou message

    @Smoke
    Scenario: Filling the form to shop
    Given I open E-commerce page
    When I fill the form details
    |name | gender |
    |Kanu | Male |
    |Tiye | Female |
    |Mabe | Female |

    Then Validate the forms behavior 
    And I select the shop page



