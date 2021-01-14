<template>
  <div>
      <b-list-group-item v-for="(repository, index) in repositories" :key="index"
       @mouseover="mouseOver(index)" @mouseout="mouseOut(index)"
       :style="{backgroundColor: repository.color}"> 
          {{ repository.name }}
      </b-list-group-item>
     
  </div>
  
</template>

<script>
import axios from 'axios'

const config = {
    baseUrl : 'https://api.github.com'
}

export default {
    data(){
        return {
            repositories : []
        }
    },
    methods: {
        mouseOver(index) {
            this.repositories[index].color = "blue";
        },
        mouseOut(index) {
            this.repositories[index].color = "white";
        }
    },
    created() {
        axios.get(`${config.baseUrl}/users/DongHwani/repos`)
        .then(response => {
                  for(var i=0;i<response.data.length;i++){
                    response.data[i].color ="white"
                    this.repositories.push(response.data[i])
                  }
            }
        )
        .catch(error => console.log(error))
    },
    
}
</script>

<style>

</style>