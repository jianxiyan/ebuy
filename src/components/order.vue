<template>
<div id="order">
	<div class="my_top2" @click="back1">
		<i class="iconfont font_l" >&#xe678;</i>
		<p class="my_title2">全部订单</p>				
	</div>	
	
	<div class="my_dingdan">
		<div class="yf">
			<img src="../common/img/nssy.jpg"/>
			<p>布衣传说男士春季新款2017韩版纯色长袖简约衬衫纯棉青年修身衬衣</p>			
		</div>
		<div class="pic">
			<p>￥199.00</p>
		</div>
		<div class="state">
			<p>订单已完成</p>
		</div>
	</div>
</div>
</template>

<script>
		
export default {
	name: 'order',
	data () {
	    return {
	      
	    }
	},
    methods:{
		back1:function(){
			window. history.back();
		},
	},
//	mounted(){
//		var _this=this;
//		axios({
//			url:'test.json'
//		}).then(function(data){
//			
//		})
//	}
}
</script>

<style>
	*{
		margin: 0;
		padding: 0;	
	}
	#order{
		height: 100vh;
		background: white;
		height: 100vh;
		font-size: 0.12rem;
	}	
	.my_top2{
		height: 0.5rem;
		background: rgba(0,0,0,0.8);
		line-height: 0.5rem;
	}
	.my_top2 .font_l{
		height: 0.5rem;
		display: block;
		float: left;
		padding: 0 0.15rem;
		font-size: 0.2rem;
		color: white;
	}
	.my_title2{
		height: 0.5rem;
		color: white;
		line-height: 0.5rem;
		font-size: 0.18rem;
		float: left;
		padding-left: 25%;
	}
	.my_dingdan{
		width: 100vw;
		box-sizing: border-box;
		height: 1.6rem;
		background: white;
		padding: 0.2rem;
		border-bottom: 1px solid #eee;
	}
	.yf{
		height: 0.6rem;
	}
	.yf img{
		width: 0.6rem;
		height: 0.6rem;
		float: left;
		margin-right: 0.1rem;
	}
	.pic{
		color: orangered;
		font-size: 0.16rem;
		height: 0.3rem;
		line-height: 0.3rem;
		padding: 0.1rem 0;
	}
	.state{
		color: #999;
		height: 0.3rem;
	}
	.state p{
		float: right;
	}
</style>