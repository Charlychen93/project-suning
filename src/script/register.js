class Register {
    constructor() {
        this.registerfooter = $('.register-footer')
    }
    init() {
        this.registerfooter.load("./index.html #foot");
    }
}

export {
    Register
}