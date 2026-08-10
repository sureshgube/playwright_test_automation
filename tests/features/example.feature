Feature: Example UI smoke test
  As a tester
  I want to open the example page
  So that I can validate the basic framework setup

  Scenario: Open the example homepage
    Given I open the example homepage
    Then the page title should contain "Example Domain"