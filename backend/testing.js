const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

function searchTextonGoogle() {
    var driver = new webdriver.Builder().forBrowser('chrome').build();
    console.log('hi');
    driver.get('https://www.lambdatest.com').then(function()
        //driver.get('http://localhost').then(function()

        {
            driver.findElement(webdriver.By.linkText('Automation')).click().then(function() {
                driver.getTitle.then(function(title) {
                    setTimeout(function() {
                        console.log('Title of website  :' + title);
                        driver.quit();
                    }, 5000);
                });
            });
        });
}

searchTextonGoogle();