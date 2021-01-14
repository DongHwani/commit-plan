<template>
  <div id="app">
      <LoginView></LoginView>
  </div>
</template>

<script>
import LoginView from './views/LoginView.vue'

export default {
  components:{
    LoginView,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
