class PIMPage {
    constructor(page) {
        this.page = page;

        this.pim = page.getByRole('link', { name: 'PIM' });
        this.pimHeading = page.getByRole('heading', { name: 'PIM' });
    }
}

export default PIMPage;