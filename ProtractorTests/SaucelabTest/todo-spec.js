describe('CDBU Modern Software Factory UI Test - xxx Environment', function() {
  it('should add a todo', function() {
    browser.ignoreSynchronization = true;
    browser.get('http://carafflenorth-test.eu-west-2.elasticbeanstalk.com/');
    element(by.css('[name="name"]')).sendKeys('Selenium Test User');
    element(by.buttonText('I\'m In!')).click();
    });
});