require('dotenv').config()
const username = process.env.username;
const password = process.env.password;

const cron = require('node-cron');
const puppeteer = require('puppeteer');



/**
 * Promote your articles automatically...
*/
let {settings, 
  autoScroll,
  delay,
  selectRandomTweet,
} = require('./settings');



// Content
let snacks = require('./Marketing/snacks');
let postTweet = require('./util/postTweet');

// let TwitterLogin = require('./util/TwitterLogin');


// (async function () {
// })();

cron.schedule('*/10 * * * *', async () => {

  const browser = await puppeteer.launch(settings);

  let content = selectRandomTweet(snacks);
  console.log('logging content', content)


  await browser.newPage(content)
  .then( async page => {
    await page.goto('https://twitter.com/login');
    await delay(1000);
    const _userBTN = 'input[name="session[username_or_email]"]';
    const _passBTN = 'input[type="password"]';
    const _loginBTN = 'div[role="button"]';
    await page.type(_userBTN, username);
    await page.type(_passBTN, password);
    await page.click(_loginBTN);
    
    await delay(1000);



    await delay(1000);
    // Post Content
    await postTweet(page,content);

    if(settings.headless ===false) await delay(10000);
    
    // TODO:
    // go through and like a bunch of posts on the timeline ?
    await autoScroll(page,300);
    
    console.log("Closing down the page...")
    await page.close();
    await browser.close();
    console.log("Browser closed...")
  })
});
