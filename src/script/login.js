class Login {
    constructor() {
        this.loginfooter = $('.login-footer');
    }
    init() {
        this.loginfooter.load("./index.html #foot");
        $('.login-content .btn').on('click', () => {
            $.ajax({
                type: 'post',
                url: 'http://localhost/project-suning/php/logintest.php',
                data: {
                    username: $('.login-content .username').val(),
                    password: $('.login-content .password').val()
                }
            }).done((data) => {
                if (data) {
                    localStorage.setItem('suninguser', $('.login-content .username').val());
                    location.href = 'index.html';
                } else {
                    console.log(data)
                    $('.login-content .username').val('');
                    $('.login-content .password').val('');
                    alert('用户名或者密码错误');
                }
            })
        })
    }
}
export {
    Login
}