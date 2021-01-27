<template>
  <div>
    <b-card  v-bind:title="repository.full_name" img-alt="Image" v-on:click="cardClick"
             img-top tag="article" style="max-width: 20rem;" class="mb-2">
    <b-card-text class="description-text">
      {{ repository.description }}
    </b-card-text>

  </b-card>

  </div>
</template>

<script>
export default {
    props :  ['repository'],
    methods: {
      cardClick(){
        console.log(":")
      }
    }
}
</script>

<style scoped>
.description-text {
  color : #676F7E;
}
.card-title{
  font-size: 1rem;
}
.mb-2 {
  color: white;
  background-color: #0D1117;
}
</style>