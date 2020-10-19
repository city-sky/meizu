; (function () {
    // 获取元素
    var $carousel = $(".banner");
    var $imgList = $('.imgList');
    var $leftBtn = $('.btnsLeft');
    var $rightBtn = $('.btnsRight');
    var $cirLis = $(".cirs li");
    // 信号量
    var idx = 0;
    // 锁
    var lock = true;
    // 绑定事件
    $rightBtn.click(function () {
        if (!lock) {
            return;
        }
        lock = false;
        idx++;
        $imgList.animate({ left: -idx * $carousel.width() }, 1000, function () {
            if (idx >= $cirLis.length) {
                idx = 0;
                $(this).css("left", 0)
            }
            lock = true;
        })
        changeColor();
    });

    $leftBtn.click(function () {
        if (!lock) {
            return;
        }
        lock = false;
        idx--;
        if (idx < 0) {
            idx = $cirLis.length;
            $imgList.css("left", -idx * $carousel.width())
            idx--;
        }
        $imgList.animate({ left: -idx * $carousel.width() }, 1000, function () {
            lock = true;
        })
        changeColor();
    })

    //小圆点事件 点击事件
    $cirLis.click(function () {
        if (!lock) {
            return;
        }
        lock = false;
        idx = $(this).index();
        $imgList.animate({ left: -idx * $carousel.width() }, 1000, function () {
            lock = true;
        })
        changeColor();
    })

    //封装小圆点的样式
    function changeColor() {
        $cirLis.removeClass("active");
        $cirLis.eq(idx >= $cirLis.length ? 0 : idx).addClass("active")
    }

    //自动轮播
    let timer = setInterval(function () {
        $rightBtn.click();
    }, 2000);
    //绑定鼠标进入事件
    $carousel.mouseenter(function () {
        clearInterval(timer);
        $leftBtn.parent().css("display", "block");
    })

    //绑定鼠标离开事件
    $carousel.mouseleave(function () {
        $leftBtn.parent().css("display", "none");
        timer = setInterval(function () {
            $rightBtn.click();
        }, 2000);
    })

})();


