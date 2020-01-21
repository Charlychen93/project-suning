class Login {
    constructor() {
        this.loginfooter = $('.login-footer');
    }
    init() {
        this.loginfooter.load("./index.html #foot");
    }
}
export {
    Login
}