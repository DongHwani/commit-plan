<template>
  <div id="app">
    <header-view></header-view>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderView from './components/layout/HeaderView'

export default {
  components: {
    HeaderView,
  },
}
</script>

<style scoped>
</style>
