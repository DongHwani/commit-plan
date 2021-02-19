<template>
  <button v-if="!link">
    <slot></slot>
  </button>
  <router-link :to="to" v-else>
    <slot></slot>
  </router-link>
</template>

<script>
export default {
    props:{
        link: {
            type: Boolean,
            required: false,
            default: false
        },
        to: {
            type: String,
            requried: false,
            default: '/',
        }
    }

}
</script>

<style scoped>
button {
  border: 0;
  outline: 0;
  background-color: transparent !important;
  color: white;
}

</style>
