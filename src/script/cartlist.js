class Cartlist {
    constructor() {
        this.cartlisthead = $('#cartlist-head');
        this.cartlistfoot = $('#cartlist-foot');
    }
    init() {
        $('#cartlist-head').load("./index.html #login");
        $('#cartlist-foot').load("./index.html #foot");
    }
}

export {
    Cartlist
}