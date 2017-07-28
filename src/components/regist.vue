
<template>
	<div id="Regist">
		<div class="reg_bj">
	
					<p class="reg_back" @click="reback">Back</p>
					<div class="reg_phos">
						<p class="reg_pho"><img src="src/common/img/QQ图片20170725200205.jpg"/></p>
						<p class="reg_name">你好!疯子</p>
					</div>
					
					<form class="reg_form">		
							<div>
								<label>账 号</label><input type="text" id="userid" class="reg_text"/>
							</div>
							<div>
								<label>密 码</label><input type="text" id="pass" class="reg_text"/>
							</div>				
							<div>
								<label>手 机</label><input type="text" id="phone" class="reg_text"/>
							</div>					
							
							<input type="button" id='reg_btn'value="注 册"/>
					</form>
			</div>

	</div>
</template>

<script>
	import $ from 'jquery'
	export default({
		name:'Regist',
		data(){
			return{
				str:''
			}
		},
		methods:{
			reback:function(){
				history.back()
			}
		},
		mounted(){
			var _this=this
			$('#reg_btn').on('click',function(){
				$.ajax({
					type:"get",
					url:"http://datainfo.duapp.com/shopdata/userinfo.php",
					async:true,
					data:{status:'register',userID:$('#userid').val(),password:$('#pass').val()},
					success:function(data){
						switch(data){
							case '0':
							alert('用户名已存在')
							break;
							case '1':
							location.href=''
							alert('注册成功')
							localStorage.setItem("user",$('#userid').val())
							location.href ="/#/home"
							location.reload()
							break;
						}
					}
				});
			})
	
		}
	})

</script>

<style>	

	input:focus{background: rgba(255,255,255,.1);}
	.reg_back{font-size:0.18rem;padding-left:0.1rem;padding-top: 0.15rem; color: #fff;}
	.reg_bj{width: 100vw;height: 100vh;background: url(../common/img/w658.jpg);}
	.reg_pho{height: 1rem;width: 1rem;background:#333;border-radius:50%;margin: 0.6rem auto 0.2rem;color: #fff;}
	.reg_pho img{height: 1rem;width: 1rem;border-radius:50%;}
	.reg_name{font-size: 0.18rem;text-align: center;display: block;margin: 0 auto;color: #fff;}
	.reg_txt{text-align: center;color: #fff;}
	.reg_form{font-size: 0.18rem;width: 100vw;margin-top: 0.8rem;text-align: center;color: #fff;}
	.reg_form div{width: 100vw;margin: 0.2rem auto;text-align: center;color: #fff;}
	.reg_form div label{padding-right: 0.2rem;line-height: 0.3rem;color: #fff;}

	.reg_text{border: none;border-bottom:1px solid #fff;line-height: 0.3rem;height: 0.3rem;background: none;width: 1.8rem;font-size: 0.2rem;}
	#reg_btn{width: 2.45rem;line-height: 0.4rem;height: 0.4rem;font-size: 0.18rem;margin-top:0.2rem;border-radius:0.1rem ;border: 1px solid #fff;background: none;color: #fff;}
</style>