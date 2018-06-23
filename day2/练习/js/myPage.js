$(function () {
    var k = $(window).height();
    var flag = false;
    $("#fullpage").fullpage({
        navigation: true,
        // navigationPosition: "left",小圆点靠左对齐
        scrollingSpeed: 1000,// 切屏时间，默认是700
        afterLoad:function (anchorLink, index) {
            if (index == 2 && flag == false) {
                $(".search").show().animate({"right":370}, 1500, function () {
                    $(".search-wrods").animate({"opacity":1}, 500, function () {
                        $(".search").hide();
                        $(".search-02-1").show().animate({"height":30,"right":250,"bottom":452}, 1000, function () {
                            flag = true;
                        });
                        $(".goods-02").show().animate({"height":218}, 1000);
                        $(".words-02").animate({"opacity":1}, 500);
                    });
                });
            }
        },
        onLeave:function (index, nextIndex, direction) {
            if (index == 2 && nextIndex == 3 && flag == true) {
                $(".shirt-02").show().animate({"bottom": -(k - 250), "width": 207 , "left": 260}, 2000, function() {
    				$(".img-01-a").animate({"opacity": 1}, 500, function() {
    					$(".btn-01-a").animate({"opacity": 1}, 500);
    				})
    			});
    			$(".cover").show();
            }
            if (index == 3 && nextIndex == 4) {
                $(".shirt-02").hide();
                $(".t1f").show().animate({"bottom": -((k - 250) + 50), "left": 260}, 2000, function () {
                    $(this).hide();
                    $(".car-img").show();
                    $(".car").animate({"left": "150%"}, 4000);
                })
                // $(".shirt-03").show();
            }
        },
    });
});