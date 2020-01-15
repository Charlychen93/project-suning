class indexjs {
    constructor() {
        this.renderUl = $('.reco-content');
        this.cityflag = true;
        this.bannerBox = $('.bannermid');
        this.bannerUl = $('.banner');
        this.bannerLi = $('.banner').children();
        this.bannerNav = $('.bn-item');
        this.banTimer = null;
        this.leftArrow = $('.leftArrow');
        this.rightArrow = $('.rightArrow');
        this.banindex = 0;
        this.length = parseInt(this.bannerLi.eq(0).css('width'));

    }
    init() {
        $.ajax({
            url: 'http://localhost/project-suning/php/suninglist.php',
            dataType: 'json'
        }).done((data) => {
            console.log(data);
            let strhtml = '';
            $.each(data, (index, value) => {
                strhtml += `
                <li>
                <a href="http://localhost/project-suning/src/details.html?sid=${value.sid}">
                    <img src="${value.picurl}" alt="">
                    <p class="reco-desc">${value.title}</p>
                    <p class="price">
                        <i>￥</i>
                        <em>${value.price}</em>
                    </p>
                </a>
            </li>
                `
            })
            this.renderUl.html(strhtml);
        })
        this.adOpen();
        this.city();
        this.banner();
    }
    city() {
        // console.log(this.cityflag);
        $('.city').on('click', () => {
            // console.log(this.cityflag);
            if (this.cityflag === true) {
                $('.arrowbox').animate({
                    top: "-6px"
                }, 200)
                this.cityflag = false;
            }
            return false
        })

        $("body").on('click', () => {
            // console.log(this.cityflag);
            if (this.cityflag === false) {
                $('.arrowbox').animate({
                    top: 0
                }, 200)
                this.cityflag = true;
            }
        })
    }

    adOpen() {
        $(".openad").on("click", function() {
            $(".openad").hide();
            $(".advert").eq(0).show();
            return false;
        })

        $(".closead").on("click", function() {
            $(".advert").eq(0).hide();
            $(".openad").show();
            return false;
        })
    }

    banner() {
        let _this = this;
        this.bannerBox.hover(() => {
            this.leftArrow.show();
            this.rightArrow.show();
            clearInterval(this.banTimer);
        }, () => {
            this.leftArrow.hide();
            this.rightArrow.hide();
            autoplay();
        })

        this.bannerNav.on('mouseover', function() {
            _this.banindex = $(this).index();
            banswitch();
        })

        _this.leftArrow.on('click', () => {
            _this.banindex--;
            banswitch();
        })

        function banswitch() {
            _this.banindex > 7 ?
                _this.banindex = 0 :
                _this.banindex;
            _this.banindex < 0 ? _this.banindex = 7 : _this.banindex;
            _this.bannerUl.css('left', `-${_this.banindex*_this.length}px`);
            $.each(_this.bannerNav, (banindex, value) => {
                $(value).removeClass('show');
            })
            _this.bannerNav.eq(_this.banindex).addClass('show');
        }

        _this.rightArrow.on('click', () => {
            _this.banindex++;
            banswitch();
            // e.stopPropagation();
        })

        function autoplay() {
            _this.banTimer = setInterval(() => {
                _this.banindex++;
                banswitch();
            }, 3000)
        }
        autoplay();
    }
}
// new indexjs().init();



export {
    indexjs
}