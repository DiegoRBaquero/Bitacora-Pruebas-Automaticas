Feature: Login into ghost
    As an user I want to authenticate myself within ghost

Scenario Outline: Login successful with admin account

  Given I go to ghost login
    And I fill with <email> and <password>
    And I try to login
    Then I expect to see admin panel

    Examples:
      | email                   | password |
      | diegorbaquero@gmail.com | hola1234 |