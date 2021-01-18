<template>
  <div>
      <b-list-group-item v-for="(repository, index) in repositories" :key="index"
       @mouseover="mouseOver(index)" @mouseout="mouseOut(index)" @click="itemClick(repository.name)"
       :style="{backgroundColor: repository.color}"> 
          {{ repository.name }}
      </b-list-group-item>
     
  </div>
  
</template>

<script>


export default {
    props: ['repositories'],
    methods: {
        mouseOver(index) {
            this.repositories[index].color = "blue";
        },
        mouseOut(index) {
            this.repositories[index].color = "white";
        },
        itemClick(repository){
            console.log(repository)

        }
    },
    
}
</script>

<style>

</style>