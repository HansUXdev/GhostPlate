/**
 *  Post Tweet
 * @param {Object} page - the page object from puppeteer
 * @param {Object} content - The tweet to post
 */
let {delay} = require('../settings');

module.exports = async function postTweet(page,content) {
  try {
    await page.goto('https://twitter.com/compose/tweet');
    await delay(1000);

    // if(content.length >= 280){
    //   console.log(`Content is too big... 
    //   Length is: ${content.length}`)
    //   return;
    // }
    const _textField = 'div[aria-label="Tweet text"]';
    const _twtBTN = 'div[data-testid="tweetButton"]';
    await delay(1000);
    // TYPE TWEET
    console.log("Typing the tweet...")
    await page.click(_textField);
    
    await delay(500);
    
    await page.type(_textField, content);
    await delay(500);
    await page.click(_textField);
    // POST TWEET
    await delay(1000);
    await page.click(_twtBTN);
    return;
  } catch (error) {
    console.log("ERROR in Twitter: \n", error)
  }
};