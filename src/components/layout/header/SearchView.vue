<template>
      <b-form-input id="search-input" 
             type="text" 
             :placeholder="placeholder"
             @keyup.enter="search" required v-model="keyword">
      </b-form-input>
</template>

<script>
export default {
    props:{
        placeholder:{
            type: String,
            requried: false,
            default: ''
        }
    },
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
    background-color: #0D1117; 
    border-radius: 6px;
    border: 1px solid #828282;
}
</style>