(function ($) {
    $.fn.timeline = function () {
        var selectors = {
            id: $(this),
            item: $(this).find(".item"),
            activeClass: "item--active",
            img: ".img"//每个时间结点图片上的信息展示
        };
        selectors.item.eq(0).addClass(selectors.activeClass);//添加为第一个结点(顶部，已激活)
        selectors.id.css(
            "background-image",
            "url(" +
            selectors.item
                .first()
                .find(selectors.img)
                .attr("src") +
            ")"//设置激活的时间结点图片样式
        );
        var itemLength = selectors.item.length;
        $(window).scroll(function () {
            var max, min;
            var pos = $(this).scrollTop();
            selectors.item.each(function (i) {
                min = $(this).offset().top;
                max = $(this).height() + $(this).offset().top;
                var that = $(this);//未达到顶部的时间结点被css的filter模糊
                if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
                    selectors.item.removeClass(selectors.activeClass);
                    selectors.id.css(
                        "background-image",
                        "url(" +
                        selectors.item
                            .last()
                            .find(selectors.img)
                            .attr("src") +
                        ")"
                    );
                    selectors.item.last().addClass(selectors.activeClass);
                }
                else if (pos <= max - 10 && pos >= min) {
                    selectors.id.css(
                        "background-image",
                        "url(" +
                        $(this)
                            .find(selectors.img)//达到顶部被激活
                            .attr("src") +
                        ")"
                    );
                    selectors.item.removeClass(selectors.activeClass);//超出顶部消除激活样式
                    $(this).addClass(selectors.activeClass);
                }
            });
        });
    };
})(jQuery)
$("#shell").timeline();