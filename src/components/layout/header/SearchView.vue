<template>
  <div class="header-search">
      <b-form-input id="search-input" 
             type="text" 
             placeholder="Input Your Github Name"
             @keyup.enter="search" required v-model="keyword">
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
           this.$router.push({name: 'repositories', params:{userId : this.keyword}}).catch(()=>{});
           this.keyword = '';
        }
    }
}
</script>

<style scoped>
#search-input{
    width: 100%;
    background-color: #0D1117; 
    border-radius: 6px;
    border: 1px solid #828282;
}
</style>