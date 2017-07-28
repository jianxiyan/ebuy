<template>
	<div id="list">
		<div class="list_nav">
			<ul>
				<li v-for="(item,index) in navarr" v-on:click="getList($event,index)">{{item.className}}</li>
				
			</ul>
		</div>
		<div class="content">
			<ul>
				<li v-for="(item,index) in conarr">
					<router-link :to="'/pdetail/'+item.goodsID" class="list_link">
						<div class="img_wrap">							
							<img :src='item.goodsListImg'/>						
							<i class="iconfont1" @click="tap($event,index)">&#xe613;</i>
						</div>
						<div class="tit">
							<p>{{item.goodsName}}</p>
							<div class="price">
								<span>￥{{Number(item.discount)?(item.price*item.discount*0.1).toFixed(2):item.price}}</span>
								<span>￥{{item.price}}</span>
							</div>
						</div>
					</router-link>
					
				</li>
				
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		name:'list',
		data(){
			return{
				navarr:[],
				conarr:[]
			}
		},
		
		beforeCreate(){
			var _this = this;
			$.ajax({
				type:"get",
				url:" http://datainfo.duapp.com/shopdata/getclass.php",
				async:true,
				success:function(data){
					data = JSON.parse(data);
					_this.navarr = data;
					
				}
			});
			$.ajax({
				type:"get",
				url:" http://datainfo.duapp.com/shopdata/getGoods.php",
				
				async:true,
				success:function(data){
					
					data =JSON.parse(data.split('(')[1].split(')')[0]); 
					
					_this.conarr = data;
				}
			});
		},
		methods:{
			
			getList(e,i){
				var _this = this;
				$.ajax({
					type:"get",
					url:"http://datainfo.duapp.com/shopdata/getGoods.php",
					data:{'classID':(i+1)},
					async:true,
					success:function(data){
						
						data =JSON.parse(data.split('(')[1].split(')')[0]); 
						
						_this.conarr = data;
					}
				});
			},
			tap(e,i){
				console.log(e.target);
				e.target.style.opacity = '1';
			}
		},
		mounted(){
			
			var scroll = new IScroll('.list_nav',{
				scrollX:true,
				click:true
			})
			
			

			
			
		
			//点击收藏
			$('#list .content li .img_wrap .iconfont').click(function(){
				
				$(this).css('color','red');
			})
		}
	}
</script>

<style>
	body{
		font-size: 0.14rem;
	}
	@font-face {
  font-family: 'iconfont1';  /* project id 359330 */
  src: url('//at.alicdn.com/t/font_xi8rqihutathuxr.eot');
  src: url('//at.alicdn.com/t/font_xi8rqihutathuxr.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_xi8rqihutathuxr.woff') format('woff'),
  url('//at.alicdn.com/t/font_xi8rqihutathuxr.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_xi8rqihutathuxr.svg#iconfont') format('svg');
}
	.iconfont1{
    font-family:"iconfont1" !important;
    font-size:0.15rem;font-style:normal;
    color: #666;
   
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    }


	#list{
		background:#f1f1f1;
		overflow-x: hidden;
	}
	#list .list_nav{
		height: 0.44rem;
		border-bottom: 1px solid #cecece;
		background: #fff;
		overflow: hidden;
		margin-top: 0.03rem;
		top: 0;
		overflow: hidden;
	}
	.list_link{
		text-decoration: none;
		color: #3D4E56;
	}
	#list .list_nav ul{
		width: 6.5rem;
		
	}
	#list .list_nav ul li{
		float: left;
		list-style: none;
		width: 0.5rem;
		text-align: center;
		height: 0.42rem;
		line-height: 0.42rem;
	}
	#list .list_nav ul li:hover{
		border-bottom: 0.02rem solid #3D4E56;
	}
	#list .content{
		padding: 0 2%;
		margin-top: 4%;
		overflow: hidden;
		
	}
	#list .content li{
		width: 42%;
		background: #fff;
		padding: 0.1rem;
		float: left;
		
		margin-bottom: 0.1rem;
		list-style: none;
	}
	
	#list .content li:nth-of-type(2n){
		float: right;
	}
	#list .content li .img_wrap{
		position: relative;
		text-align: center;
		
		height: 1.4rem;
		overflow: hidden;
	}
	#list .content li .img_wrap .iconfont{
		position: absolute;
		top: 0.08rem;
		right: 0.1rem;
		color: red;
		opacity: 0.2;
	}
	
	#list .content li img{
		width: 100%;
	}
	#list .content li p{
		line-height: 0.4rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	#list .content li .price span:nth-of-type(1){
		color: red;
	}
	#list .content li .price span:nth-of-type(2){
		color: #cecece;
		text-decoration: line-through;
	}
</style>