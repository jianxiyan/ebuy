<template>
	<div id="home_con">	
		<div class="swiper-container">
			  <div class="swiper-wrapper">
			    <div class="swiper-slide ho_swiper"><img src="../common/img/QQ截图20170719220111.png"/></div>
			    <div class="swiper-slide ho_swiper"><img src="../common/img/TB1LVx2SpXXXXa_aXXXSutbFXXX.jpg"/></div>
			    <div class="swiper-slide ho_swiper"><img src="../common/img/11111111.jpg"/></div>
			  </div>
		</div>
			
			<div class="ho_con">
				<h2 class="ho_con_tit">China Style equal to HUSENJI</h2>
				<p class="ho_con_sub">HUSENJI ORIGINATED FROM CHINA</p>
			
			
				<div class="swiper-container1" style="overflow: hidden;">
				
					<div class="swiper-wrapper">
						<div class="swiper-slide ho_con_swiper" v-for="item in hoArr">
							<router-link :to="'/pdetail/'+item.goodsID">
							<div class="ho_goods">

								<img :src="item.goodsListImg" />
								<div class="ho_goods_con">
									<span class="ho_goods_icon">
										<span class="ho-sadow">◆</span>
										SALE
									</span>
								
									<p class="ho_goods_title">National</p>
									<p class="ho_goods_price">￥{{item.price}}</p>
													
								</div>
							</div>
							</router-link>
						</div>
						
					</div>
				</div>
				<div id="container">
					<p class="ho_Com">Commodity Recommendation</p>
				  <ul>
				    <li v-for="item in list">
				      <img :src="item"/>
				    </li>
				  </ul>
				</div>
			</div>
	</div>	
</template>

<script>
	import $ from 'jquery'
	export default{
		name:'home_con',
		
		data(){
			return{
			  	list:["src/common/img/11111111.jpg","src/common/img/TB24DtJXXojyKJjy0FiXXbCrVXa-356060330.jpg","src/common/img/QQ截图20170719220111.png"],
				hoArr:[]
			}
		},
		beforeCreate(){
			var _this = this;
			$.ajax({
				type:"get",
				url:" http://datainfo.duapp.com/shopdata/getGoods.php",				
				async:true,
				success:function(data){	
					
					var b = Math.floor(Math.random()*7)
					data =JSON.parse(data.split('(')[1].split(')')[0]); 
					data = data.splice(b,4)
					_this.hoArr = data;
					
				}
			});
		},
		mounted(){
			
				
				var mySwiper = new Swiper('.swiper-container', {
					
				})
				var swiper = new Swiper('.swiper-container1', {
					effect : 'coverflow',
					slidesPerView: 1.3,
					centeredSlides: true,
					coverflow: {
			            rotate: 30,
			            stretch: 5,
			            depth: 60,
			            modifier: 2,
			            slideShadows : true
					}
	        	});
			
			
		}
	}
</script>

<style>
	.ho_swiper{
		
		height: 2rem;
		
	}
	.ho_swiper img{
		height: 2rem;
		width: 100vw;
	}
	.ho_con{
		padding: 0.15rem 0.15rem;
	}
	.ho_con_tit{
		height: 0.3rem;
		font-size:0.18rem ;
		line-height: 0.3rem;
		color: #333;
		font-weight: 600;
		
	}
	.ho_con_sub{
		height: 0.5rem;
		font-size:0.12rem ;
		line-height: 0.25rem;
		color: #555;
		
	}
	.ho_con_swiper{
		box-shadow: 0px 0px 5px 1px #777 ;
		font-size: 0.2rem;
		height: 1.7rem;
		
	}
	.ho_goods{
		height:1.7rem ;		
		position: relative;
	}
	.ho_goods img{
		height: 1.7rem;
		width: 50%;
		float: left;
	}
	.ho_goods_con{
		width: 40%;
		float: right;
				
	}
	a{
		color:#333
	}
	.ho_goods_title{
		width: 100%;
		font-size:0.16rem;
		font-weight: 100;
		margin-top:60% ;
		
	}
	.ho_goods_price{
		width: 100%;
		font-size:0.14rem;
	}
	.ho_goods_icon{
		color: #fff;
		background: #000000;
		position: absolute;
		right: -0.1rem;
		top: 0.2rem;
		display: block;
		width: 0.5rem;
		height: 0.2rem;
		font:0.08rem/0.2rem "arial rounded mt bold";
		text-align: center;
		text-indent: 0.05rem;
	}
	.ho-sadow{
		font-size: 0.43rem;
		position: absolute;
		left: -0.2rem;
		top: -0.01rem;
	}
	.ho_Com{
		font: 0.14rem/0.5rem "bookman old style";
		margin-top:0.1rem ;
		color: #333;
	}
	#container li:nth-of-type(1){
		margin-top:0
	}
	#container li{		
		margin-top:0.2rem ;
		height:1.6rem;
		width: 90vw;
		overflow: hidden;
	}
	#container li img{
		height:1.6rem;
		width: 90vw;
	}
</style>