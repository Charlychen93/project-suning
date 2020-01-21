class Details {
    constructor() {
        // this.detailsHeader = $('.details-header');
        this.detailsFooter = $('.details-footer')
    }
    init() {
        // this.detailsHeader.load("./index.html #login")
        this.detailsFooter.load("./index.html #foot");
    }
}

export {
    Details
}