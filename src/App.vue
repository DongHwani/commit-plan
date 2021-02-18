<template>
  <div id="app">
    <header-view></header-view>
    <div class="content-container">
      <side-plan-view></side-plan-view>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HeaderView from './components/layout/header/HeaderView'
import SidePlanView from './components/layout/side/SidePlanView'

export default {
  components: {
    HeaderView, SidePlanView
  },
}
</script>

<style>
html {
  height: 100%;
}
body {
  height: 100%;
}
#app {
  height: 100%;
}
.content-container {
  display: flex;
  height: 100%;
}


</style>
