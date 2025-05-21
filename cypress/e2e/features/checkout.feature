Feature: Cart
Background: Perequisites
    Given Admin login the website
    When I add product to the cart and checkout it

    Scenario: Unsuccesfull check out product
        When I do not fill any required field
        Then Alert message should be appears

    Scenario: Succesfull check out product
        When I fill all the required field
        Then I can see the overview and finish the check out
