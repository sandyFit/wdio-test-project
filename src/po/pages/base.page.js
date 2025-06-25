const { Header, SideMenu } = require("../components");

class BasePage {
    constructor(url) {
        this.url = url;
        this.header = new Header();
        this.sidemenu = new SideMenu();
    };

    open() {
        return browser.url(this.url);
    }
}
module.exports = BasePage;
