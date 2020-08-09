
const puppeteer = require('puppeteer');

let {
    settings,
    username,
    password, 
    delay, 
    selectRandomArticle
  } = require('./settings');

let articles = require('./red');



/**
 * Logins into twitter and return the page object from puppeteer
 * @param {number} time - in milliseconds, for seconds, * 1000
 */
module.exports = async function TwitterLogin(settings) {
  const browser = await puppeteer.launch(settings);
  const __Page = browser;
  try {
    let content = selectRandomArticle(articles);
    console.log('logging content', content)
      await __Page.newPage(content)
      // await _initPage(page);
      // to the login page & wait 1 second
      // selectors for button
      // where you type the tweet
      // where click to finish tweet
      // type credentials, login and goto compose tweet...
      // return the page object for other functions to use
      .then( async page => {
        await page.goto('https://twitter.com/login');
        await delay(1000);
        const _userBTN = 'input[name="session[username_or_email]"]';
        const _passBTN = 'input[type="password"]';
        const _loginBTN = 'div[role="button"]';
        const _textField = 'div[aria-label="Tweet text"]';
        const _twtBTN = 'div[data-testid="tweetButton"]';
        await page.type(_userBTN, username);
        await page.type(_passBTN, password);
        await page.click(_loginBTN);
        if(settings.headless ===false) await delay(10000);
        return page;
        
      });
  } 
  catch (error) {
    console.log("ERROR in Twitter: \n", error)
  }
};