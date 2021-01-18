<template>
  <div>
    <b-card  v-bind:title="repository.full_name" img-alt="Image" 
             img-top tag="article" style="max-width: 20rem;" class="mb-2">
    <b-card-text>
      {{ repository.description }}
    </b-card-text>

    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>

  </div>
</template>

<script>
export default {
    props :  ['repository'],
    computed: {
      titleText(){
        return "hi";
      }
    },
}
</script>

<style>

</style>