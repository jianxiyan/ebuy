<template>
	<div id="login">
		<div class="lg_bj">
					<p class="lg_back">Back</p>
					<div class="lg_phos">
						<p class="lg_pho"></p>
						<p class="lg_name">你好!疯子</p>
					</div>
			        <form class="lg_form">		
							<div>
								<label>账 号</label><input type="text" id="userid" class="lg_text"/>
							</div>
							<div>
								<label>密 码</label><input type="password" id="pass" class="lg_text"/>
							</div>				
												
							<button type="button" id="lg_btn">登录</button>

					</form>
	 
	   </div>    			

	</div>
</template>

<script>
	import axios from 'axios'
	import $ from 'jquery'
	export default({
		name:"login",
		methods:{			
			
		
		},
		mounted(){
				var _this=this
				$('#lg_btn').on('click',function(){
					$.ajax({
					type:"get",
					url:" http://datainfo.duapp.com/shopdata/userinfo.php",
					async:true,
					data:{status:'login',userID:$('#userid').val(),password:$('#pass').val()},
					success:function(data){
						console.log(data)
					}
				});
				})
	
			}
	})
</script>

<style>
	input{outline: none;}
	input:focus{background: rgba(255,255,255,.1);}
	.lg_back{font-size:0.2rem;padding-left:0.1rem;}
	.lg_bj{width: 100vw;height: 100vh;background: url(../common/img/w658.jpg);background-size:cover ;}
	.lg_pho{height: 1rem;width: 1rem;border-radius:50%;margin: 0.6rem auto 0.2rem;border: 2px solid #fff;}
	.lg_name{font-size: 0.18rem;text-align: center;display: block;margin: 0 auto;}
	.lg_txt{text-align: center;}
	.lg_form{font-size: 0.18rem;width: 100vw;margin-top: 0.8rem;text-align: center;}
	.lg_form div{width: 100vw;margin: 0.2rem auto;text-align: center;}
	.lg_form div label{padding-right: 0.2rem;line-height: 0.3rem;}

	.lg_text{border: none;border-bottom:1px solid #fff;line-height: 0.3rem;height: 0.3rem;background: none;width: 1.8rem;font-size: 0.2rem;}
	#lg_btn{width: 2.45rem;line-height: 0.4rem;height: 0.4rem;font-size: 0.18rem;margin-top:0.2rem;border-radius:0.1rem ;border: 1px solid #fff;background: none;}
</style>