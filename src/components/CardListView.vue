<template>
  <div>
      <span v-for="(repository, index) in propsData" :key="index">
        <CardItemView v-bind:repository="repository"></CardItemView>
      </span>  
  </div>
</template>

<script>
import CardItemView from './CardItemView.vue'

export default {
    props : ['propsData'],
    components : { CardItemView }
}
</script>

<style>

</style>