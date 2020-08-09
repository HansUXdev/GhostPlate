

/**
 * @Description: Logs out of Twitter
 * @requires {setting} from Settings
 * @requires {page} from TwitterLogin
 */
module.exports = async function TwitterLogOut(page,settings) {
  try {
    console.log("Closing down the page...")
    await page.close();
    await browser.close();
    console.log("Browser closed...")
  } 
  catch (error) {
    console.log("ERROR in Twitter: \n", error)
  }
};