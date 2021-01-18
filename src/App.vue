<template>
  <div id="app">
      <SearchView v-on:search="searchRepositories"></SearchView>
      <ListView v-bind:repositories="repositories"></ListView>
  </div>
</template>

<script>
import SearchView from './components/SearchView'
import ListView from './components/ListView'
import { fetchRepositories } from './api/index.js'

export default {
  data: function() {
    return {
      repositories: []
    }
  },
  methods: {
    searchRepositories(keyword){
     if(this.repositories.length > 0) {
       this.repositories = [];
     }
     fetchRepositories(keyword)
        .then(response => {
            for(var i=0;i<response.data.length;i++){
                response.data[i].color ="white"
                console.log(response.data)
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
  components : {
     SearchView,
     ListView
  }
}
</script>

<style>

</style>
