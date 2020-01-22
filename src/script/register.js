class Register {
    constructor() {
        this.registerfooter = $('.register-footer');
        this.username = $('.register-content .user');
        this.test = $('.register-content .test');
        this.password = $('.register-content .pass');
        this.userflag = true;
        this.testflag = true;
        this.passflag = true;
    }
    init() {
        this.registerfooter.load("./index.html #foot");
        $('.randomTestNum').on('click', () => {
            this.randomnum();
        })
        this.randomnum();
        this.formtest();
    }
    randomnum() {
        let numstr = '';
        for (let i = 0; i < 4; i++) {
            numstr += Math.floor(Math.random() * 9);
        }

        $('.randomTestNum').html(numstr);
    }

    formtest() {
        this.username.on('focus', () => {
            this.username.attr('placeholder', '');
            $('.username-tishi').html('请输入用户名').css('color', '#ccc');
        })
        this.username.on('blur', () => {
            if ($.trim($('.register-content .user').val()) !== '') {
                $.ajax({
                    url: 'http://localhost/project-suning/php/registertest.php',
                    data: {
                        user: $('.register-content .user').val()
                    },
                    type: 'post'
                }).done((data) => {
                    // console.log(data)
                    if (!data) {
                        $('.username-tishi').html('√').css('color', 'green');
                        this.userflag = true;
                    } else {
                        $('.username-tishi').html('用户名重复').css('color', 'red');
                        this.userflag = false;
                    }
                })
            } else {
                $('.username-tishi').html('用户名不能为空').css('color', 'red');
                this.userflag = false;
            }
        })
        this.test.on('focus', () => {
            this.test.attr('placeholder', '');
            $('.test-tishi').html('请输入验证码').css('color', '#ccc');
        })
        this.test.on('blur', () => {
            if ($.trim(this.test.val()) !== '') {
                if (this.test.val() === $('.randomTestNum').html()) {
                    $('.test-tishi').html('√').css('color', 'green');
                    this.testflag = true;
                } else {
                    $('.test-tishi').html('请重新输入验证码').css('color', 'red');
                    this.testflag = false;
                }
            } else {
                $('.test-tishi').html('验证码不能为空').css('color', 'red');
                this.testflag = false;
            }
        })

        this.password.on('focus', () => {
            this.password.attr('placeholder', '');
            $('.pass-tishi').html('请输入密码').css('color', '#ccc');
        });
        this.password.on('input', () => {
            var numReg = /\d+/;
            var letterRegS = /[a-z]+/;
            var letterRegB = /[A-Z]+/;
            var other = /[\W\_]+/;
            var count = 0;
            if (numReg.test(this.password.val())) {
                count++;
            }
            if (letterRegS.test(this.password.val())) {
                count++;
            }
            if (letterRegB.test(this.password.val())) {
                count++;
            }
            if (other.test(this.password.val())) {
                count++;
            }
            switch (count) {
                case 1:
                    this.passflag = false;
                    $('.pass-tishi').html('密码信号弱').css('color', 'red');
                    $('.pass-strong').css('display', 'block');
                    $('.strong1').css('background-color', 'red').siblings('b').css('background-color', '');
                    break;
                case 2:
                case 3:
                    this.passflag = true;
                    $('.pass-tishi').html('密码信号中').css('color', 'yellow');
                    $('.pass-strong').css('display', 'block');
                    $('.strong2').css('background-color', 'yellow').siblings('b').css('background-color', '');
                    break;
                case 4:
                    this.passflag = true;
                    $('.pass-tishi').html('密码信号强').css('color', 'green');
                    $('.pass-strong').css('display', 'block');
                    $('.strong3').css('background-color', 'green').siblings('b').css('background-color', '');
                    break;
            }

        })

        this.password.on('blur', () => {
            if ($.trim(this.password.val()) !== '') {
                if (this.passflag) {
                    $('.pass-tishi').html('√').css('color', 'green');
                }
            } else {
                $('.pass-tishi').html('密码不能为空').css('color', 'red');
            }
        })
        $('.register-btn').on('submit', () => {
            if (this.username.val() === '') {
                this.userflag = false;
                $('.username-tishi').html('用户名不能为空').css('color', 'red');
            }
            if (this.test.val() === '') {
                this.testflag = false;
                $('.test-tishi').html('验证码不能为空').css('color', 'red');
            }
            if (this.password.val() === '') {
                this.passflag = false;
                $('.pass-tishi').html('密码不能为空').css('color', 'red');
            }

            if (!this.userflag || !this.testflag || !this.passflag) {
                return false;
            }
        })
    }
}

export {
    Register
}