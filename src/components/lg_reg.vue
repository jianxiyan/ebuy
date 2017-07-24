<template>
	<div id="Lg_Reg">
		
		<a class="Lg_Reg_logo " ><img src="src/common/img/logo_1.jpg"/></a>
		<p class="Lg_Reg_pp " >E买 , EBUY , 够到全球好物  , 如此简单</p>
		<p class="Lg_Reg_pp " >EBUY , Shopping , So easy</p>
		
		<button id='Lg_Reg_reg'  class="Lg_Reg_btn" style="margin-top:1rem;">注册</button>
		<button id='Lg_Reg_lg'  class="Lg_Reg_btn">登 录</button>
	</div>
</template>

<script>
	export default({
		name:"Lg_Reg",
		
	})
</script>

<style>
	#Lg_Reg{height: 100vh;width: 100vw;text-align: center;background: url(../common/img/w658.jpg) no-repeat;background-size:cover;}
	.Lg_Reg_logo{display: inline-block;text-align: center;width: 0.8rem;height: 0.8rem;margin-top: 0.8rem;}
	.Lg_Reg_logo img{display: inline-block;}
	.Lg_Reg_pp{font-size: 0.16rem;}
	.Lg_Reg_btn{display:block;width:2rem;line-height: 0.4rem;height: 0.4rem;font-size: 0.14rem;border-radius:0.1rem ;border: 1px solid #fff;background: none;margin: 0.2rem auto;}
</style>