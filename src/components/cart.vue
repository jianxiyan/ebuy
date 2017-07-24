<template>
	<div id="cart">
		<ul class="cart_list" id="cartList">
			<li class="cart_list_con" v-for='item in arr'>
				<input type="checkbox" class="cart_check check" />
				<img :src="item.imgUrl"  />
				<div class="cart_js">
					<p class="cart_goods_title">{{item.title}}</p>
					<p class="cart_size">{{item.size}}</p>
					<p class="cart_price"><span class="cart_price_new">￥{{item.price}}</span><span class="cart_price_old">{{item.price}}</span></p>
					<p class="cart_sum">
						<span class="cart_add">+</span>						
						<input type="text" class="cart_num" value="1"/>
						<span class="cart_minus">-</span>						
					</p>
				</div>
				
			</li>
		</ul>
		
		<div class="cart_account">
			<input type="checkbox" name="" id="cart_a" class="cart_all check" />
			<label for="cart_all" class="cart_lab">全选</label>
			
			<router-link to='/pay'><a class="cart_button">结算</a></router-link>
			<div class="cart_account_con">
				<p class="cart_account_con_all">合计：<span class="cart_account_sum">0.00</span></p>
			
			</div>
		</div>
	</div>
</template>

<script>
import $ from 'jquery'
  export default{
  	name:'cart',
  	data(){
  		return{
  			arr:[{'title':'海澜之家短裤','imgUrl':'src/common/img/QQ截图20170719210118.png','price':'370','size':'3xl'},
		  		 {'title':'海澜之家短裤','imgUrl':'src/common/img/QQ截图20170719210118.png','price':'370','size':'3xl'},
		  		 {'title':'海澜之家短裤','imgUrl':'src/common/img/QQ截图20170719210118.png','price':'370','size':'3xl'}
		  		 ]
  		}
  	},
  	mounted(){
  		var cartList=document.getElementById('cartList')
  		var cartListcon=cartList.children
  		var cartall=document.getElementById('cart_a')
  		
  		var cartnum=document.getElementsByClassName('cart_num')
  		
  		var cartcheck=document.getElementsByTagName('cart_check')
  		var checkInput=document.getElementsByClassName('check')
  		var cartSum=document.getElementsByClassName('cart_account_sum')[0]
  		
  		var cartadd=document.getElementsByClassName('cart_add')
  		var cartminus=document.getElementsByClassName('cart_minus')

  			for(let i=0;i<cartminus.length;i++){			
  				cartminus[i].onclick=function(){
  					if(cartnum[i].value>1){
  						cartnum[i].value--
  					}else{
  						cartnum[i].value=1
  					}
  				}
  			}
		for(let i=0;i<cartminus.length;i++){			
  				cartadd[i].onclick=function(){  				
  						cartnum[i].value++
  				
  				}
  			}

  		function getTote(){
 
  			var price=0;
  			var num=0;
  			var sum=0;
  	
  			if(cartall.checked){
  				for(var i=0;i<cartListcon.length;i++){
  					num=parseInt(cartListcon[i].getElementsByTagName('input')[1].value)
  					price=parseFloat(cartListcon[i].getElementsByClassName('cart_price_new')[0].innerHTML.slice(1)) 						
					sum+=price*num
					cartSum.innerHTML=sum 
  				}  		
  			}else{
  				cartSum.innerHTML = 0
  			}
	  				
  		}
  		
  		function getTotefen(){
  
  			var price=0;
  			var num=0;
  			var sum=0;   			
  			for(var i=0;i<cartListcon.length;i++){
  				if(cartListcon[i].getElementsByTagName('input')[0].checked){
  					num=parseInt(cartListcon[i].getElementsByTagName('input')[1].value)
	  				price=parseFloat(cartListcon[i].getElementsByClassName('cart_price_new')[0].innerHTML.slice(1)) 						
					sum+=price*num
					cartSum.innerHTML=sum 
  				}
  						
  				
  			}  		
  			}

  		
  		
			for(var i=0;i<checkInput.length;i++){
  			checkInput[i].onclick=function(){
 				
  				if(this.className==='cart_all check'){
  					for(var i=0;i<checkInput.length;i++){
  						getTote();
  						checkInput[i].checked=this.checked;
  					}
  				}
  				getTotefen()
  				if(this.checked==false){
  					cartall.checked=false;
  				}
  			}
  		}
  		
  		}
  		
  
  	}
</script>

<style>
	ul,ol{
		list-style: none;
	}
	.cart_list{
		width: 100vw;
		height: auto;
	}
	.cart_list_con{
		width: 94vw;
		padding:2vh 3vw;
		height: 1rem;
	
		margin-top:0.1rem ;
		box-shadow: 1px 0 5px 0 #555555;
	}
	.cart_check{
		float: left;
		margin-right: 0.1rem;
		position: relative;
		top: 40%;
		background: #fff;
		height: 0.2rem;
		border-radius: 50%;
	}
	.cart_list_con img{
		height: 1rem;
		width: 1rem;
		float: left;
		margin-left:0.1vw ;
	}
	.cart_js{
		float: right;
		width: 55%;
		
	}
	.cart_goods_title{
		font: 0.16rem/0.3rem "微软雅黑";
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	.cart_size{
		font: 0.12rem/0.3rem "微软雅黑"
	}
	.cart_price{
		font: 0.14rem/0.25rem "微软雅黑"
	}
	.cart_price_new{
		color: red;
		margin-right:0.2rem ;
	}
	.cart_price_old{
		color: #888888;
		text-decoration: line-through;
	}
	.cart_sum{
		height: 0.2rem;		
	}
	.cart_minus{
		float: right;
		width: 0.15rem;
		height: 0.15rem;
		font: 0.14rem/0.15rem "微软雅黑";
		text-align: center;
		border: 1px solid #999;
		border-right: 0;
		color: #999;
	}
	.cart_num{
		float: right;
		width: 0.25rem;
		border: 1px solid #999;
		text-align: center;
		color: #999;
	}
	.cart_add{
		float: right;
		width: 0.15rem;
		height: 0.15rem;
		font: 0.14rem/0.15rem "微软雅黑";
		text-align: center;
		border: 1px solid #999;
		border-left: 0;
		color: #999;
	}
	.cart_account{
		width: 97vw;
		height: 0.5rem;
		position: fixed;
		bottom: 0.43rem;
		border-top: 1px solid #C8C8CD;
		border-bottom: 1px solid #C8C8CD;
		padding-left:3vw;
	}
	.cart_all{
		float: left;
		height: 0.2rem;
		border-radius: 100%;
		margin-right:0.1rem ;
		position: relative;
		top: 30%;
	}
	.cart_lab{
		float: left;
		font: 0.16rem/0.5rem "微软雅黑";
		width: 0.5rem;
		
	}
	.cart_account_con{
		height:0.45rem ;
		width: 1rem;
		float: right;
		padding-top:0.05rem ;
	}
	.cart_account_con_all{
		height: 0.21rem;
		font: 0.16rem/0.21rem "微软雅黑";
	}
	.cart_account_sum{
		color: red;
	}
	.cart_account_move{
		height: 0.21rem;
		font: 0.12rem/0.21rem "微软雅黑";
		color: #777777;
	}
	.cart_button{
		float: right;
		height: 0.5rem;
		width: 0.9rem;
		color: #fff;
		background:linear-gradient(#ccc,#333);
		font: 0.15rem/0.5rem "微软雅黑";
		text-align: center;
	}
</style>