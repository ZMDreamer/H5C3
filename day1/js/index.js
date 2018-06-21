$(function () {
    var flag = false;
    var pageHeight = $(window).height();
    $('#fullpage').fullpage({
        sectionsColor: ['#fadd67', '#84a2d4', '#ef674d', '#fed', '#d04759', '#84d9ed', '#8ac060'],
        navigation: true,
        scrollingSpeed: 1200,
        afterLoad: function (archorLink, index) {
            if (index == 2 && flag == false) {
                $('.search').show().animate({
                    "right": 364
                }, 1000, function () {
                    $('.search-02-1').show();
                    $('.search-words').animate({
                        "opacity": 1
                    }, 500, function () {
                        $('.search').hide();
                        $('.words-02').fadeTo(800,1);
                        $('.sofa-goods').show().animate({
                            height: 212
                        }, 800,function(){
                            flag = true;
                        });
                        $('.search-02-1').animate({
                            "height": 30,
                            top: 18,
                            right: 240
                        }, 800)
                    });

                });
            }

        },
        onLeave: function(index,nextIndex,direction){
            if (index == 2&&nextIndex==3&&flag==true) {
                $('.shirt-02').show().animate({bottom:-(pageHeight-250),left:260, width:207,height:166},1500,function(){
                    $('.img-01-a').fadeTo(1000,1);
                    $('.btn-01-a').fadeTo(1000,1);
                });
                $('.cover').show();
            }
            if (index==3&&nextIndex==4) {
                $('.shirt-02').hide();
                $('.img-t1f').show().animate({bottom: -(pageHeight-250+50),left:249},1500,function(){
                    $('.img-t1f').hide();
                    $('.sofa-car').show();
                    $('.shoppingCar').animate({left:"120%"},1200)
                })
            }
        }
    });
});