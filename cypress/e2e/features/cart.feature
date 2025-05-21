Feature: Cart
Background: Perequisites
    Given I open the Saudcedome login page
    When I enter the username "standard_user" and password "secret_sauce"
    When I click the login button
    Then I should be redirected to the invetory page

    Scenario: Succesfull add to cart
        When I click add to cart for "Sauce Labs Backpack"
        And I click cart button 
        Then I got redirected to cart page
        And I found my product of "Sauce Labs Backpack" exist
        
        # Examples:
        #     | product                           | price  | 
        #     | Sauce Labs Backpack               | $29.99 |
        #     | Sauce Labs Bolt T-Shirt           | $15.99 |

    Scenario: Succesfull remove the product from cart
        When I click add to cart for "Sauce Labs Backpack"
        And I click cart button 
        Then I got redirected to cart page
        When I click the remove button on "Sauce Labs Backpack"
        Then "Sauce Labs Backpack" does not appears in cart page
