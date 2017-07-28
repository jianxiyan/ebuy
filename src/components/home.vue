<template>
	<div id="home" style="position: relative;">
		<div class="ho_nav">
			<p class="ho_title" id="0">Home<span class="ho_tit"></span></p>
			<p class="ho_title" id="1">All<span class></span></p>
			<p class="ho_title" id="2">Enshrine<span class></span></p>
			<p class="ho_title" id="3">Trends<span class></span></p>
		</div>
		<div class="ho_rong" style="margin-bottom: 0.35rem;">
			<v-home_con></v-home_con>
		</div>
		<div class="ho_rong">
			<v-list></v-list>
		</div>
		<div class="ho_rong">
			<v-collect></v-collect>
		</div>
		<div class="ho_rong">
			
		</div>
		
		
	</div>
	
</template>

<script>
	import home_con from './home_con.vue'
	
	import collect from './collect.vue'
	import list from './list.vue'
	import $ from 'jquery'

	export default{
		name:'home',
		data(){
			return{
				str:''
				
			}
		},
		components:{
			'v-home_con':home_con,
			'v-list':list,
			'v-collect':collect,
			
		},
		mounted(){
			var this1 =this
			$('.ho_rong').eq(0).css({'display':'block','top':'0.5rem'})
			$('.ho_nav').find('.ho_title').click(function(){
				var _this = this 
				this1.str = $(this).text()
				this1.$emit("v-title",this1.str)
				$('.ho_rong').each(function(i){
					
					if($('.ho_rong')[i].style.display=='block'){						
						$('.ho_rong').eq(i).animate({'left':'-100vw'},300,function(){
							$('.ho_rong').eq(i).css({'top':'100vh','left':0})	 
							$('.ho_rong').eq($(_this).attr('id')).animate({'top':'0.5rem','left':0},300).show(300)
							
						}).hide(300)
						
					}
				})						
				$('.ho_nav').find('span').removeClass()			
				$(this).find('span').addClass('ho_tit')
		})
	}
}
	
			
</script>
	
<style>
	
	.ho_nav{
		height: 0.5rem;
		width: 100vw;		
		display: flex;
		
	}
	.ho_title{
		flex: 1;
		font:0.16rem/0.5rem "微软雅黑";
		text-align: center;
		color: #333;
		display: flex;
		justify-content: center;
		position: relative;
	}
	.ho_tit{
		display: block;
		position: absolute;
		width: 0.24rem;
		height: 0.03rem;
		bottom: 0;
		left:0.34rem ;
		background: #333;
		border-radius:1px ;
		
	}
	.ho_rong{
		width: 100vw;
		height: auto;
		position: absolute;
		top: 100vh;
		display: none;
	}
	
</style>