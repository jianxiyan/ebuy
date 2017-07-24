<template>
	<div id="start">
		<div class="swiper-container">
			  <div class="swiper-wrapper">
			  	<div class="swiper-slide" style="width: 100vw;height: 100vh;background: url(src/common/img/w658.jpg)">
			  		<a class="start_logo ani" swiper-animate-effect="bounceInDown" swiper-animate-duration="0.8s" swiper-animate-delay="0.2s"><img src="src/common/img/logo_1.jpg"/></a>
			        <p class="start_pp ani" swiper-animate-effect="flip" swiper-animate-duration="0.8s" swiper-animate-delay="0.3s">E买 , EBUY , 够到全球好物  , 如此简单</p>
			        <p class="start_ppp ani" swiper-animate-effect="flip" swiper-animate-duration="0.8s" swiper-animate-delay="0.3s">EBUY , Shopping , So easy</p>
			  	</div>			   
			    <div class="swiper-slide" style="width: 100vw;height: 100vh;background: url(src/common/img/8.jpg);background-size:cover ;"></div>
			    <div class="swiper-slide" style="width: 100vw;height: 100vh;background: url(src/common/img/a-Akg6kj_fw658.jpg);background-size:cover ;"></div>
			  	<div class="swiper-slide" style="width: 100vw;height: 100vh;background: url(src/common/img/qCcA48_fw658.jpg); background-size:cover ;">
			  		<router-link to='/index'><button type="button" class="start_btn ani" swiper-animate-effect="bounceInRight" swiper-animate-duration="0.3s" swiper-animate-delay="0">立即体验</button></router-link>
			  	</div>
			    </div>
			  </div>
		</div>	

	</div>
</template>

<script>
	export default({		
		name:"start",
		data(){
			return {
				arr:['src/common/img/qCcA48_fw658.jpg','src/common/img/8.jpg','src/common/img/wc5_fw658.jpg']
			}
		},
		methods:{
			
		},
		mounted(){
			  var mySwiper = new Swiper ('.swiper-container', {
				  onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
				    swiperAnimateCache(swiper); //隐藏动画元素 
				    swiperAnimate(swiper); //初始化完成开始动画
				  }, 
				  onSlideChangeEnd: function(swiper){ 
				    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
				  } ,
				  })

		}
	})


</script>

<style>
	*{margin: 0;padding: 0;}
	.start_logo{display: block;width: 0.8rem;height: 0.8rem;margin: 0 auto;margin-top: 0.8rem;margin-bottom: .8rem;}
	.start_logo img{width: 0.8rem;height: 0.8rem;}
	.start_pp{color: #fff;font-size: 0.16rem;text-align: center;line-height: .3rem;}
	.start_ppp{color: #ccc;font-size: 0.15rem;text-align: center;line-height: .3rem;}
	.start_btn{display: block;width: 2.4rem;height: 0.4rem;border: 1px solid #fff;border-radius:0.4rem;text-align: center;line-height: 0.4rem;font-size: 0.16rem;margin: 0 auto;background: none; color: #fff;margin-top:4.5rem;outline:none;}
</style>