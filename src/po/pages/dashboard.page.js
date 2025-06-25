const BasePage = require("./base.page");

class DashboardPage extends BasePage {
    constructor() {
        super("/showcase/angular/appoinmentplanner/#/dashboard");
    }
}
module.exports = DashboardPage;
