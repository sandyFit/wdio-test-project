const { Then } = require('@wdio/cucumber-framework');
const { page } = require('../po');
const compareText = require('../utils/compare-text');

Then('Page title should {string} {string}', async function (shouldBeParam, titleText) {
    const pageTitle = await browser.pageTitle();
    return compareText(pageTitle, titleText, shouldBeParam);
});

