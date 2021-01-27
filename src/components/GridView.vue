<template>
    <div class="grid-view">
        <SearchView v-on:search-grid="search"></SearchView>
        <CardListView :propsData="gridData"></CardListView> 
    </div>
</template>

<script>
import CardListView  from './CardListView'
import SearchView  from './SearchView'
    
export default {
    data(){
        return {
            repositories: []
        }
    },
    props:['gridData'],
    methods: {
        search(keyword){
            this.$emit('search', keyword)
        }
    },
    components : { 
        SearchView,
        CardListView
    }
}
</script>

<style>
.grid-view {
    margin-top: 10%;
}
</style>