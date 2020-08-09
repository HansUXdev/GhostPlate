let settings = {
  timeout: 0, 
  headless: false, // set this to false to make life fun :-p
  devtools: false,
  
  // Open with User's own Chrome Browser to appear more human
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',

  defaultViewport: {
    width: 1080,
    height: 800,
    deviceScaleFactor: 1,
  }
};


/**
 * Waits for desired amount of time and returns an async promise
 * @param {number} time - in milliseconds, for seconds, * 1000
*/
const delay = async (time) => await new Promise(res => setTimeout(res, time));

/**
 * Scrolls down the page until it ends.
 * This wont resolve if a page has infinite scrolling
 */
const autoScroll = (page) =>{
  page.evaluate(
    async () =>
      await new Promise((resolve, reject) => {
        let totalHeight = 0;
        let distance = 100;
        let timer = setInterval(() => {
          let scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;
          if (totalHeight >= scrollHeight) {
            clearInterval(timer);
            resolve();
          }
        }, 500);
      })
  )
};

const randomNumber = (maxNumber) => Math.floor( (Math.random() * maxNumber ) );

/**
 * Find a random article
 * @param {Array} articles - returns array of objects
 */
const selectRandomTweet = (tweet) => {
  // console.log("TWEET: \n", tweet, " \n")
  let   number = Math.floor( (Math.random() * tweet.length ) );
  let   randomArticle = tweet[number];
  let   {description,url,categories} = tweet[number];
  let   randomTweet =  description + url +' '+ categories;
  if(randomTweet.length > 280){
    console.log(`description is ${description.length} characters long...`);
    console.log(`url is ${url.length} characters long...`);
    console.log(`categories is ${categories.length} characters long...`);
  }
  console.log("Number: ",number);
  console.log("Result: \n",randomTweet,"\n");
  //  console.log(typeof randomTweet);  
  return randomTweet;
};


exports.default                 = settings;
exports.settings                = settings;
exports.autoScroll              = autoScroll;
exports.delay                   = delay;
exports.selectRandomTweet       = selectRandomTweet;