<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
  export default{
    name: 'APP',
    beforeCreate: function () {
      var userInfo = JSON.parse(window.localStorage.getItem('userInfo')),
        username = userInfo && userInfo.username,
        password = userInfo && userInfo.password;
      localStorage.clear();

      if(username && password){
          this.$router.replace('/')
      }else {
        this.$router.replace('/login')
      }
    }
  }
</script>
