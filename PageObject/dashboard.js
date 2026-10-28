class DashboardPage {
    constructor(page) {
        this.page = page;

        this.usernameinput = page.getByRole('textbox', { name: 'Username' });
        this.passwordinput = page.getByRole('textbox', { name: 'Password' });
        this.loginbutton = page.getByRole('button', { name: 'Login' });
    }
}

export default DashboardPage;