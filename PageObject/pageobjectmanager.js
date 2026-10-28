import loginpage from './loginpageobject.js';
import AdminPage from './Admin.js';
import PIMPage from './PIM.js';

class PageObjectManager {
    constructor(page) {
        this.loginpage = new loginpage(page);
        this.adminPage = new AdminPage(page);
        this.pimPage = new PIMPage(page);
    }
}

export default PageObjectManager;