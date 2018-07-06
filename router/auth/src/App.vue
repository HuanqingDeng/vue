<template>
  <div id="app">
    <router-link to="/">/</router-link>
    <router-link to="/about">/about</router-link>
    <router-link to="/dashboard">/dashboard</router-link>
    <router-link to="/login" v-if="login">/Login</router-link>
    <router-link to="/loginOut" v-if="!login">/LoginOut</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      login:true
    }
  },
  beforeUpdate(){
    if(localStorage.token){
      this.login=false;
    }else{
      this.login=true;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
