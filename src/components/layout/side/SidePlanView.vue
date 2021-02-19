<template>
  <div class="side-container">
    <h5>Your Commit Plan</h5>
  </div>
</template>

<script>
export default {
  created() {
    const loginMember = localStorage.getItem('todo')
    this.$store.dispatch('FETCH_MY_REPOSITORIES', loginMember);
  }
}
</script>

<style scoped>
h5 {
  font-size: 1rem;
  color: white;
  margin-left: 10%;
  margin-top: 15%;
}

</style>