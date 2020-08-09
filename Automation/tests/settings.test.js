let {settings, 
  autoScroll,
  delay,
  selectRandomTweet,
} = require('../settings');
let snacks = require('../Marketing/snacks');
// let ghost = require('./Marketing/ghost');
// let postTweet = require('./util/postTweet');
// console.log( selectRandomTweet(snacks) )


console.log("SNACKS", snacks[0] )

describe('Settings should all work', () => {

  test('selectRandomTweet() should return an object', async () => {
    const expected =   {
      description: `@HansOnConsult is wrapping up the first ever #SnackAthon with @auth. What's his #hackNsnack? Favorite snacks? \n`,
      url: 'https://www.amazon.com/PAQUI-Haunted-Ghost-Pepper-Chips/dp/B07NQLBMPQ',
      categories:"#JavaScript #hackathons #hotones #CodeRedChallenge"
    }
    console.log('expected content: \n', aexpectedctual)
    
    let actual = selectRandomTweet(snacks);

    console.log('actual content: \n', actual)

    expect(actual).toMatchObject(expected)
    
  }, 20000)
})