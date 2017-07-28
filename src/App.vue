<template>
  <div id="app"> 	
  	<router-view @v-modle="modle" :mod="modles"></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      modles:''
    }
  },
  methods:{
  	modle:function(data){
  		this.modles = data
  		console.log(this.modles)
  	}
  },
  components:{
  	
  	
  }
}
</script>

<style>
*{
	margin: 0;
	padding: 0;
}
html{
	font-size: 100px;
}

</style>
