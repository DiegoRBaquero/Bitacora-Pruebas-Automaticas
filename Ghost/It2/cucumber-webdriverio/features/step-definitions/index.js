var {defineSupportCode} = require('cucumber');
var {expect} = require('chai');

defineSupportCode(({Given, When, Then}) => {
  Given('I go to ghost login', () => {
    browser.url('/ghost');
  });

  When(/^I fill with (.*) and (.*)$/ , (email, password) => {
    browser.waitForVisible('input[name="identification"]', 5000);
    var mailInput = browser.element('input[name="identification"]');
    mailInput.click();
    mailInput.keys(email);

    var passwordInput = browser.element('input[name="password"]');
    passwordInput.click();
    passwordInput.keys(password);
  });

  Then('I expect to see admin panel', () => {
    browser.waitForVisible('h2.gh-canvas-title', 5000);
    var title = browser.element('h2.gh-canvas-title').getText();
    expect(title).to.include('Your stories')
  });

  When('I try to login', () => {
    browser.element('button=Sign in').click()
  });
});

