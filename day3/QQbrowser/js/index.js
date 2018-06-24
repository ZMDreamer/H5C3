$(function(){
    setTimeout(() => {
        $('.pic1').css('transform','translate3d(-50%,-50%,0px) rotateY(0deg)')
    }, 300);
    $('#fullpage').fullpage({
        navigation:true,
        loopBottom:true,
        scrollingSpeed: 1000,
        onLeave: function(index,nextIndex,direction){
            // 第一页二动画的效果start
            $('.pic1').attr('style','');
            if (nextIndex==1) {
                $('.pic1').css('transform','translate3d(-50%,-50%,0px)  rotateY(0deg)');
                //背景旋转效果
                 $('.circles').css('transform','rotateZ(0deg)');
            }else{
                 $('.pic1').css('transform','translate3d(-50%,-50%,-400px)  rotateY(360deg)')
                //背景旋转效果
                $('.circles').css('transform','rotateZ(-60deg)')
            }
            //第二页动画效果
            if (nextIndex==2) {
                $('.box53').css('transform','translate3d(-50%,-50%,0px) scale(2)')

                setTimeout(() => {
                    $('.box53').css('transform','translate3d(-50%,-50%,0px) scale(1)');

                }, 2000);
                
            }else{
                $('.box53').css('transform','translate3d(-50%,-50%,-1000px) scale(0.1)')
            }
          
        }
    });
})