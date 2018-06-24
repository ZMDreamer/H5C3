$(function () {
    var flag = false;
    var pageHeight = $(window).height();
    $(".next").click(function(event) {
        $.fn.fullpage.moveSectionDown();
     });
    $('#fullpage').fullpage({
        sectionsColor: ['#fadd67', '#84a2d4', '#ef674d', '#fed', '#d04759', '#84d9ed','#8ac060'],
        navigation: true,
        scrollingSpeed: 1200,
        afterLoad: function (archorLink, index) {
            if (index == 2 && flag == false) {
                $('.search').show().animate({
                    "right": 364
                }, 1000, "easeOutBack", function () {
                    $('.search-02-1').show();
                    $('.search-words').animate({
                        "opacity": 1
                    }, 500, function () {
                        $('.search').hide();
                        $('.words-02').fadeTo(800, 1);
                        $('.sofa-goods').show().animate({
                            height: 212
                        }, 800, function () {
                            flag = true;
                        });
                        $('.search-02-1').animate({
                            "height": 30,
                            top: 18,
                            right: 240
                        }, 800,function(){
                            $('.next').fadeIn()
                        })
                    });

                });
            }
           

        },
        onLeave: function (index, nextIndex, direction) {
            $('.next').fadeOut();
            if (index == 2 && nextIndex == 3 && flag == true) {
                $('.cover').show();
                $('.shirt-02').show().animate({
                    bottom: -(pageHeight - 250),
                    left: 260,
                    width: 207,
                    height: 166
                }, 1500, function () {
                    $('.next').fadeIn();
                    $('.img-01-a').fadeTo(1000, 1);
                    $('.btn-01-a').fadeTo(1000, 1);
                });
                $('.cover').show();
            }
            if (index == 3 && nextIndex == 4) {
                $('.shirt-02').hide();
                $('.img-t1f').show().animate({
                    bottom: -(pageHeight - 250 + 50),
                    left: 249
                }, 1500, function () {
                    $('.img-t1f').hide();
                    $('.sofa-car').show();
                    $('.shoppingCar').animate({
                        left: "120%"
                    }, 1200, "easeInElastic", function () {
                        $('.note').show();
                        $('.note-img,.words-04-a').animate({
                            opacity: 1
                        }, 1500,function(){
                            $('.next').fadeIn();
                        });
                    })
                })
            }
            // 第四屏到第五屏动画
            if (index == 4 && nextIndex == 5) {
                setTimeout(() => {
                    $('.hand-05').animate({
                        bottom: 0
                    }, 1000, function () {
                        $('.mouse-05').fadeTo(1000, 1);
                        $('.t1f-05').show().animate({
                            bottom: 70
                        }, 1500, function () {
                            $('.bank-card').animate({
                                bottom: 390
                            }, 1000, function () {
                                $('.words-05').addClass('words-05-a');
                    $('.next').fadeIn();

                            });
                        });
                    });
                }, 1000);



            }
            //第四屏到第五屏动画over
            //第五屏到第六屏动画start
            if (index == 5 && nextIndex == 6) {
                //沙发变小掉入盒子中和子掉入小车,移动背景图片,云下面的字出现,送货员显示,门打开收货人出现, 头上的字出现
                $('.t1f-05').animate({
                    bottom: -(pageHeight - 500),
                    width: 65,
                    left: "36%"
                }, 1000, function () {
                    $(this).hide();
                })
                $('.box-06').show().animate({
                    left: "34%"
                }, 1000, function () {
                    $(this).animate({
                        bottom: 10
                    }, 1000, function () {
                        $(this).hide();
                        $('.t1lg-06').animate({
                            right: "50%"
                        }, 1200, "easeInOutBounce");
                        $('.address-06').fadeTo(1000, 1);
                        $('.next').fadeIn()
                        $('.section6').animate({
                            'backgroundPositionX': "100%"
                        }, 4000, function () {
                            $('.men-06').animate({
                                height: 262
                            }, 1000, function () {
                                $(this).animate({
                                    right: "36%",
                                    bottom: 100
                                }, 1000, function () {
                                    $('.door-06').show();
                                    $('.girl-06').show().animate({
                                        height: 262,
                                        bottom: 100,
                                        left: "66%"
                                    }, 1000, function () {
                                        $('.receive-good').animate({
                                            opacity: 1
                                        }, 1000
                                        )
                                    })
                                });

                            })
                        })
                    })
                })
            }
            //第五屏到第六屏动画over
            //第七屏的动画效果
            if (index == 6 && nextIndex == 7) {
                setTimeout(() => {
                    $('.stars>img').first('img').animate({
                        opacity: 1
                    }, 800, function () {
                        $(this).next().animate({
                            opacity: 1
                        }, 800, arguments.callee);
                    $('.next').fadeIn()

                    });
                }, 1000);
                setTimeout(() => {
                    $('.goodComment').fadeTo(1000, 1);

            }, 5000)
            }
            //第七屏动画完成
             //第八屏动画效果
             if (index ==8&&nextIndex==9) {
                //小手跟着鼠标移动

                setTimeout(() => {
                   $('.next').fadeIn()
                    
                }, 1000);
                $(document).mousemove(function(e){
                    var x = e.pageX - $('.hand-08').width()/2;
                    var y = e.pageY + 10;
                    if (y < $('.beginshopping').offset().top+70) {
                        y = $('.beginshopping').offset().top+70;
                    }
                    $('.hand-08').css({left:x,top:y});
                })
                //鼠标经过显示动态图
                $('.beginshopping').hover(function(){
                    $('.btn-08').toggle();
                });
                //点击再来一次回到第一个页面顶部
                $('.tryagain').click(function(){
                    $.fn.fullpage.moveTo(1);
                   $("img, .move").attr("style", "");
                   $('.words-05').removeClass('words-05-a');
                   $('.section6').css('backgroundPositionX', "25%");
                   flag = false;

                })
            }

        }
    });
});