$(function(){
	$('#fullpage').fullpage({
			// action:'asd',
			// scrollBar:true
			// autoScrolling:false
			// navigation:true,
			// navigationPosition:'left'\
			fixedElements:'.navbar',
			css3:true,
			anchors:['a','b','c','d','e','f','g'],
			// menu:true,
			afterLoad:function(a,i,d){
				$('.navbar li').removeClass('navctl').eq(i-1).addClass('navctl');
				// if (i===4) {
				// 	$('.wihd>div').css('left',0);
				// };
			},
			onLeave:function(a,i,d){
				// if (i===4) {
				// 	if (d=='up') {
				// 		$('.wihd>div').addClass('sshang').removeClass('sxia');
				// 	}else{
				// 		$('.wihd>div').addClass('sxia').removeClass('sshang');
				// 	}
				// };
			}
		});
	var mySwiper = new Swiper ('.swiper-container', {
		// direction: 'vertical',
		loop: true,
		// initialSlide :3,
	}) 
})	