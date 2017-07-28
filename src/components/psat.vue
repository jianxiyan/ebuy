<template>
<div id="psat">
	<div class="my_top1" @click="back">
		<i class="iconfont font_l" >&#xe678;</i>
		<p class="my_title1">个人信息</p>				
	</div>
	<div class="my_grxx1">
		<p class="my_id1">头像</p>				
		<i class="iconfont">&#xe603;</i>
		<div class="my_tx1">			
		</div>
	</div>
	<div class="my_cont">
		<div class="my_cb" >
			<p @click="nichen">昵称</p>
			<i class="iconfont font_r">&#xe603;</i>
			<span >{{str}}</span>
			<mt-popup v-model="popupVisible" position="bottom">
				<div class="my_nic">
					<p>修改昵称</p>
					<input type="text" v-model="ipt"/>
					<mt-button type="primary" @click="ncqr">确认</mt-button>
					<mt-button type="danger" @click="ncqx">取消</mt-button>
				</div>			
			</mt-popup>	
		</div>		 		
		<div class="my_cb my_ck">
			<p @click="xingbie">性别</p>
			<i class="iconfont font_r">&#xe603;</i>
			<span>{{value}}</span>
			<mt-popup v-model="popupVisible1" position="bottom">
				<div class="my_xb">
					<p>修改性别</p>
					<mt-radio class="xbxz"  align="right" v-model="value"				  
					  :options="[ '男', '女']">
					</mt-radio>
				</div>			
			</mt-popup>
		</div>
		<div class="my_cb" >
			<p @click="shengri">生日</p>
			<i class="iconfont font_r">&#xe603;</i>
			<span>{{strb}}</span>
			<mt-popup v-model="popupVisible2" position="bottom">
				<div class="my_sr">
					<p>修改生日日期</p>	
					<div class="my_b my_y">
						年：
						<input type="text" v-model="ipty"/>
					</div>
					<div class="my_b">
						月：
						<input type="text" v-model="iptm"/>
					</div>
					<div class="my_b">
						日：
						<input type="text" v-model="iptd"/>
					</div>
					<mt-button type="primary" @click="br">确认</mt-button>
				</div>			
			</mt-popup>
		</div>
		<div class="my_cb">
			<p @click="shouji">手机号</p>
			<i class="iconfont font_r">&#xe603;</i>
			<span>{{strp}}</span>
			<mt-popup v-model="popupVisible3" position="bottom">
				<div class="my_tel">
					<p>修改手机号</p>
					<input type="text" v-model="iptp"/>
					<mt-button type="primary" @click="phone">确认</mt-button>
				</div>			
			</mt-popup>	
		</div>
		<div class="my_cb my_ck">
			<p @click="dizhi">收货所在地</p>
			<i class="iconfont font_r">&#xe603;</i>
			<span>{{strd}}</span>
			<mt-popup v-model="popupVisible4" position="bottom">
				<div class="my_dz">
					<p>修改地址</p>
					<input type="text" v-model="ipts"/>
					<mt-button type="primary" @click="dress">确认</mt-button>
				</div>			
			</mt-popup>	
		</div>
		<div class="my_cb">
			<p>我的二维码</p>
			<i class="iconfont font_r">&#xe603;</i>
			<span class="my_ew"><i class="iconfont font_r">&#xe620;</i></span>
		</div>
		<div class="my_cb">
			<p>我的建议</p>
			<i class="iconfont font_r">&#xe603;</i>
			<span>添加</span>
		</div>
		<mt-button type="danger" size="large" style="margin-top:0.2rem ;" @click="clc">退出</mt-button>
	</div>
	
</div>
</template>
<script>
	
import { Popup } from 'mint-ui';
import { Button } from 'mint-ui';
import { Radio } from 'mint-ui';

export default {
 	
	
  	name: 'psat',
  	data () {
	    return {
	    	popupVisible:false,
	    	popupVisible1:false,
	    	popupVisible2:false,
	    	popupVisible3:false,
	    	popupVisible4:false,
	    	str:'stan-luo',
	    	ipt:'',
	    	value:'女',
	    	strb:'2000.03.03',
	    	ipty:'',
	    	iptm:'',
	    	iptd:'',
	    	strp:'13866663973',
	    	strd:'北京市海淀区',
	    	iptp:'',
	    	ipts:''
	    }
  	},
	methods:{
		back:function(){
			window. history.back();
		},
		nichen:function(){
			this.popupVisible = true
		},
		xingbie:function(){
			this.popupVisible1 = true
		},
		shengri:function(){
			this.popupVisible2 = true
		},
		shouji:function(){
			this.popupVisible3 = true
		},
		dizhi:function(){
			this.popupVisible4 = true
		},
		ncqr:function(){
			this.popupVisible = false,
			this.str=this.ipt,
			this.ipt=''
		},
		ncqx:function(){
			this.popupVisible = false,
			this.ipt=''
		},
   		br:function(){
   			this.strb=this.ipty+'.'+this.iptm+'.'+this.iptd,
   			this.ipty=this.iptm=this.iptd='',
   			this.popupVisible2 = false
   		},
   		phone:function(){
   			this.popupVisible3 = false,
   			this.strp=this.iptp,
			this.iptp=''
   		},
    	dress:function(){
    		this.popupVisible4 = false,
    		this.strd=this.ipts,
			this.ipts=''
    	},
    	clc:function(){
    		localStorage.removeItem("user")
    		location.href="/#/home"
    		location.reload()
    	}
	},
}
</script>

<style>
	
	#psat{
		height: 100vh;
	}
	.my_top1{
		height: 0.5rem;
		background: rgba(0,0,0,0.8);
		line-height: 0.5rem;
	}
	.my_top1 .font_l{
		height: 0.5rem;
		display: block;
		float: left;
		padding: 0 0.15rem;
		font-size: 0.2rem;
		color: white;
	}
	.my_title1{
		height: 0.5rem;
		color: white;
		line-height: 0.5rem;
		font-size: 0.18rem;
		float: left;
		padding-left: 25%;
	}
	.my_grxx1{
		height: 1rem;
		background: white;
		margin-bottom: 0.1rem;
	}
	.my_tx1{
		width: 0.6rem;
		height: 0.6rem;
		border-radius: 50% 50%;
		background: url(../common/img/tx.jpg) no-repeat;
		background-size: cover;
		float: right;
		margin: 0.2rem;
	}
	.my_id1{
		font-size: 0.14rem;
		color: black;
		line-height: 1rem;
		float: left;
		padding-left: 0.15rem;
	}
	.my_grxx1 i{
		height: 1rem;
		float: right;
		line-height: 1rem;
		padding-right: 0.15rem;
	}
	.my_cont{
		width: 100%;
	}
	.my_cb{
		background: white;
		font-size: 0.14rem;
		height: 0.5rem;
		line-height: 0.5rem;
		border-bottom: 1px solid #eee;
	}
	.my_cb i{
		display: block;
		float: left;
		padding: 0 0.15rem;
		font-size: 0.2rem;
	}
	.my_cb p{
		padding-left: 0.15rem;
		float: left;
		width: 50%;
	}
	.my_cb span{
		display: block;
		float: right;
		color: #999;
	}
	.my_cb .my_ew i{
		font-size: 0.2rem;
		padding: 0;
	}
	.my_cb .font_r{
		display: block;
		float: right;
		font-size: 0.15rem;
	}
	.my_ck{
		margin-bottom: 0.1rem;
	}
	.my_nic,.my_sr,.my_xb,.my_tel,.my_dz{
		width: 100vw;
		height: 2rem;
		text-align: center;
	}
	.my_nic input,.my_tel input,.my_dz input{
		width: 70%;
		display: block;
		height: 0.3rem;
		margin: 0.2rem auto;
	}
	.my_nic button{
		height: 0.3rem;
	}
	.my_nic p,.my_xb p,.my_sr p,.my_tel p,.my_dz p{
		width: 100%;
		padding: 0;
		text-align: center;
		clear: both;
	}
	.my_xb .xbxz a{
		display: block;
		width: 100vw;
	}
	.my_sr p{
		height: 0.3rem;
	}
	.my_b{
		height: 0.3rem;
	}
	.my_y{
		height: 0.6rem;
	}
	.my_sr button{
		height: 0.3rem;
	}
</style>