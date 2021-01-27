<template>
  <div>
      <b-form-input size="sm" id="searchInput"
          type="text" placeholder="Input Your Github Name"
          v-on:keyup.enter="search" required v-model="keyword" >
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
          this.$emit('search-grid', this.keyword)
          this.keyword = ''
        }
    }
}
</script>

<style >
#searchInput{
    width:50%;
    margin: 0 auto; 
}
</style>