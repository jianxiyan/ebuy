<template>
	<div id="Pro_state">
		<div class="sta_top">
			<p><span>订单号：</span><span>#22798955</span></p>
			<p><span>2016-01-01--14:21:00</span></p>
		</div>
		<figure class="sta_list">
			<img src="src/common/img/xm_fw658.jpg"/>
			<figcaption>
				<p class="sta_title">休闲个性秋冬棉衣</p>
				<div class="sta_gg">
					<p>	
						<span>颜色:</span>
						<span class="list_color">黑色</span>
					</p>
					<p>
						<span>尺码:</span>
						<span class="list_color">L</span>
					</p>
					<p>
					<span>数量:</span>
					<span class="list_color">X1</span>
					</p>
					
				</div>
				<span class="list_sta">
					运送中
				</span>
				<p class="price"><span class="new_price">￥2629</span><span class="old_price">(￥3000)</span></p>
			</figcaption>
		</figure>
		<div class="sta_top">
			<p style="text-align: right; display: block;padding-right: 0.2rem;" ><span>共1件商品</span><span>合计：</span><span>￥2629.00</span></p>
		</div>
	</div>
</template>

<script>
	export default({
		name:'Pro_state',
		
	})
	
</script>

<style>
	
	#Pro_state p{font-size: 0.15rem;line-height: 0.35rem;}
	#Pro_state span{font-size: 0.1rem;display: inline;}
	.sta_top{width: 100vw;display: flex;flex-direction: row;border: 1px solid #ccc;border-left: none;border-right: none;}
	.sta_top p{flex: 1;height: 0.35rem;display: flex;padding-left:0.1rem;}

	.sta_list{display: flex;padding:0.1rem;}
	.sta_list img{height:20vh;flex: 1;margin-right: 0.1rem;}
	.sta_list figcaption{flex: 2.4;position: relative;}
	.sta_gg{display: flex;}

	.list_sta{position: absolute;top: 0.45rem;right: 0.05rem;}
</style>