<template>
  <div class="inputBox shadow">
      <b-form-input size="sm"
          type="text" placeholder="Input Your Github Name"
          v-on:keyup.enter="search" required
          v-model="keyword" >
      </b-form-input>
  </div>
</template>

<script>
export default {
    data(){
      return {
          keyword: ""
        }
    },
    methods: {
        search() {
          this.$emit('search', this.keyword)
        }
    }
}
</script>

<style>


</style>