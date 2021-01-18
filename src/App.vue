<template>
  <div id="app">
      <SearchView v-on:search="searchRepositories"></SearchView>
      <CardListView v-bind:propsData="repositories"></CardListView>
  </div>
</template>

<script>
import SearchView from './components/SearchView'
import CardListView from './components/CardListView'
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
     CardListView
  }
}
</script>

<style>

</style>
