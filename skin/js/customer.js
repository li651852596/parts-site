/*
*Aman - 194nb.com
*/
//手机端导航
$(function () {
		$(".menu_open").click(function () {
			$(".nav").animate({ 'left': '0' }, 400);
			$(".hcover").animate({ 'right': '0' }, 400);
		});
		$(".hcover").click(function () {
			$(this).animate({ 'right': '-50%' }, 400);
			$(".nav").animate({ 'left': '-50%' }, 400);
			$(".nav_ul").animate({ 'left': '0' }, 400);
			$('.nav_item_open').css('left', '-50%');
		});
		$(".nav_item i").click(function () {
			$(".nav_ul").animate({ 'left': '-100%' }, 400);
			$(this).next('.nav_item_open').css('left', '0');
		});
		$(".subopen").click(function () {
			$(this).parent('.nav_item_open').css('left', '-50%');
			$(".nav_ul").animate({ 'left': '0' }, 400);
		});
	});

   //banner 切换	
	var swiper1 = new Swiper('.apple-banner .swiper-container1', {      
        autoplay: 5000,//自动播放时间
        loop: true,//开启循环true or false
        slidesPerView: 1, //列数
        spaceBetween: 0, //slides之间间隔
        breakpointsInverse: true,
        prevButton: '.swiper-button-prev',
		nextButton: '.swiper-button-next',
        pagination: '.swiper-pagination',
		paginationType : 'fraction',
	    paginationClickable: true,
       observer:true,
       observeParents:true,
       autoplayDisableOnInteraction:false,
    });
	

//推荐产品切换
 var swiper2 = new Swiper('#swiper2', {      
        autoplay: 6000,//自动播放时间
        loop: false,//开启循环true or false
        slidesPerView: 3, //列数
        spaceBetween: 25, //slides之间间隔
        breakpointsInverse: true,
	 paginationClickable: true,
       observer:true,
       observeParents:true,
       autoplayDisableOnInteraction:false,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            600: {
                slidesPerView: 1,
            },
			 767: {
                slidesPerView: 2,
				spaceBetween: 20,
            },
            920: {
                slidesPerView: 2,
				spaceBetween: 25,
            }
			,
			 1024: {
                slidesPerView: 3,
				spaceBetween: 25 ,
            }
			,
            1200: {
                slidesPerView: 3,
				spaceBetween: 25,
            }
        }
    });
	
//产品分类 切换
 var swiper3 = new Swiper('#swiper3', {      
        autoplay: 6000,//自动播放时间
        loop: true,//开启循环true or false
        slidesPerView: 6, //列数
        spaceBetween: 10, //slides之间间隔
          breakpointsInverse: true,
	 paginationClickable: true,
       observer:true,
       observeParents:true,
       autoplayDisableOnInteraction:false,
        breakpoints: {
           320: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            450: {
                slidesPerView: 2,
                spaceBetween: 10
            },
			 767: {
                slidesPerView: 3,
                spaceBetween: 10
            }
			,
			 920: {
                slidesPerView: 3,
                spaceBetween: 10
            }
			,
			 1024: {
                slidesPerView: 4,
                spaceBetween: 10
            },
            
            1440: {
                slidesPerView: 5,
                spaceBetween: 10
            }
        }
    });
   
/*产品目录 begin*/
/*产品目录第一个默认展开*/
//$(function(){ $(".cp_type .bd ul li").first().children('div').show();$(".cp_type .bd ul li").first().addClass('on');});
$(document).ready(function () {
	  $('.bd li.on').find('div').css('display', 'block');
  });
  $('.sanji').each(function () {
	  if ($(this).find('a.on').length > 0) {
		  $(this).css('display', 'block');
		  $(this).parent('li').addClass('on');
	  }
  });
$(".cp_type .bd ul li p span").click(function () {
	if($(this).parents('li').hasClass('on')){
		$(this).parents('li').removeClass('on').find('div').stop().slideUp();
	}else{
		$(this).parents('li').find('div').removeAttr("style");
		$(this).parents('li').addClass('on').find('div').stop().slideDown();
	}
});
if(document.body.clientWidth <= 1080){  
	$(".cp_type .hd").click(function () {
		if($(this).hasClass('on')){
			$(this).next('div').removeAttr("style");
			$(this).removeClass('on').next('div').stop().slideUp();
		}else{
			$(this).next('div').removeAttr("style");
			$(this).addClass('on').next('div').stop().slideDown();
		}
	});
}
/*产品目录 end*/

/*侧边漂浮*/
$(function() {
    var time;
    //var winHeight = top.window.document.body.clientHeight || $(window.parent).height();
    $('.client-2').css({
        'marginTop': -($('.client-2').height() / 2)
    });
    $('#client-2 li').bind({
        'mouseenter': function() {
            var scope = this;
            time = setTimeout(function() {
                var divDom = $(scope).children('div');
                var maxWidth = divDom.width();
                $(scope).stop().animate({
                    left: 77-maxWidth
                },
                'normal',
                function() {
                    var pic = $(scope).find('.my-kefu-weixin-pic');
                    if (pic.length > 0) {
                        pic.show();
                    }
                });
            },
            100)
        },
        'mouseleave': function() {
            var pic = $(this).find('.my-kefu-weixin-pic');
            var divDom = $(this).children('div');
            var maxWidth = divDom.width();
            if (pic.length > 0) {
                pic.hide();
            }
            clearTimeout(time);
            var divDom = $(this).children('div');
            $(this).stop().animate({
                left: 0
            },
            "normal",
            function() {});
        }
    });
    //返回顶部
    $(window).scroll(function() {
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        var eltop = $("#client-2").find(".my-kefu-ftop");
        if (scrollTop > 0) {
            eltop.show();
        } else {
            eltop.hide();
        }
    });
    $("#client-2").find(".my-kefu-ftop").click(function() {
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        if (scrollTop > 0) {
            $("html,body").animate({
                scrollTop: 0
            },
            "slow");
        }
    });
});