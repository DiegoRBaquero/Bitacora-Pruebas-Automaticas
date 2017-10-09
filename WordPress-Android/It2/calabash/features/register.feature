Feature: Register feature

  Scenario: As a new user I can register
    When I press view with id "create_site_button"
    Then I see "Create an account on WordPress.com"
    Then I clear input field with id "email_address"
    Then I enter text "pa138@diegorbaquero.com" into field with id "email_address"
    Then I go back
    Then I enter text "patest138" into field with id "username"
    Then I go back
    Then I enter text "Mypass123#" into field with id "password"
    Then I go back
    Then I enter text "patest138" into field with id "site_url"
    Then I go back
    Then I scroll down
    Then I press view with id "signup_button"
    Then I wait up to 80 seconds to see "Logged in as"