<template>
  <div id="app">
      <GridView v-on:search="search" v-bind:gridData="repositories"></GridView>
  </div>
</template>

<script>
import GridView from './components/GridView'
import { fetchRepositories } from './api/index.js'

export default {
  data: function() {
    return {
      repositories: []
    }
  },
  methods: {
    search(keyword){
     if(this.repositories.length > 0) {
       this.repositories = [];
     }
     fetchRepositories(keyword)
        .then(response => {
            for(var i=0;i<response.data.length;i++){
                response.data[i].color ="white"
                this.repositories.push(response.data[i])
            }
        })
        .catch(error => {
          const errorCode = error.response.status
          if(errorCode === 404) {
            alert("해당 리포지토리를 찾을 수 없습니다")
          }
        })      

    },
   
  },
  components : { GridView,
  }
}
</script>

<style scoped>
body {
  background-color: black;
}

</style>
