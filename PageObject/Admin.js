class AdminPage {
    constructor(page) {
        this.page = page;

        this.admin = page.getByText('Admin', { exact: true });
        this.adminHeading = page.getByRole('heading', { name: 'Admin' });
    }
}

export default AdminPage;