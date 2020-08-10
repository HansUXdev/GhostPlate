/**
 * @name Alibaba product search
 * @desc Searches Alibaba.com for a product and checks if the results show up
 */

const puppeteer = require('puppeteer')
let browser
let page

// the site you want a styleguide for
const URL = "https://blog.getbootstrap.com/2020/06/16/bootstrap-5-alpha/";

const delaySecond = async (time) => await new Promise(res => setTimeout(res, 1000 * time));

const settings = {
  timeout: 0, 
  headless: false
}

//
const urlSelector = "#input-stylify"
const btnSelector = "#btn-stylify"
const downloadSelector = "#btn-download";

beforeAll(async () => {
  browser = await puppeteer.launch(settings)
  page = await browser.newPage()
})

describe('Create a styleguide for your current website', () => {
  test('has search buttons', async () => {
    await page.setViewport({ width: 1280, height: 800 })
    await page.goto('http://stylifyme.com')

    await page.waitForSelector(urlSelector)
    await page.waitForSelector(btnSelector)

    const searchInput = await page.$(urlSelector)
    const searchBTN = await page.$(btnSelector)
    
    expect(searchInput).toBeTruthy()
    expect(searchBTN).toBeTruthy()

  }, 10000)

  test('click the button and crawl the site', async () => {

    await page.click(urlSelector);
    await page.type(urlSelector, URL);
    await delaySecond(2)
    await page.click(btnSelector);
    
    // Download btn should appear
    await delaySecond(2)
    await page.waitForSelector(downloadSelector)
    const downloadBTN = await page.$(downloadSelector)
    expect(downloadBTN).toBeTruthy()
  }, 10000)

  test('click the button and download the styleguide', async () => {
    /**
     * Setting the download path into this folder may be possible but its also risky...
     * https://stackoverflow.com/questions/46966341/puppeteer-how-to-set-download-location
     * DOCS: https://chromedevtools.github.io/devtools-protocol/tot/Page/#method-setDownloadBehavior
     */
    await page._client.send('Page.setDownloadBehavior', 
      {
        behavior: 'allow', 
        downloadPath: './StyleGuide/'
      }
    );
    // download
    const downloadBTN = await page.$(downloadSelector)
    await page.click(downloadSelector);
    await page.waitForSelector(downloadSelector)
    await delaySecond(8)
    // Take a screenshot in case it fails...
    await page.screenshot({
      path: './StyleGuide/StyleGuide.png',
      fullPage: true
    })
    expect(downloadSelector).toBeTruthy()
    expect(downloadBTN).toBeTruthy()
  }, 20000)

  afterAll(async () => {
    await browser.close()
  })
})