Feature: Login to Saudcedome
Background: Perequisites
    Given I open the Saudcedome login page

@positive
    Scenario: Succesfull login with valid credential 
        When I enter the username "standard_user" and password "secret_sauce"
        When I click the login button
        Then I should be redirected to the invetory page

@negative
    Scenario: Admin does not fill the username and password field
        When I click the login button
        Then Showing error message that username is required
 
     Scenario: Admin fill the invalid username and password field
        When I enter the username "abc" and password "1234"
        When I click the login button
        Then Showing error message that creds is invalid

    Scenario: Admin only fill the username field
        When I enter only the username "standard_user"
        When I click the login button
        Then Showing error message that password is required

    Scenario: Admin only fill the password field
        When I enter only the password "secret_sauce"
        When I click the login button
        Then Showing error message that username is required
    
