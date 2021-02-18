<template>
  <div class="repositories-container">  
      <ul>
          <repository-item v-for="(repository,index) in repositories" :key="index"
                        :repository="repository"></repository-item>
      </ul>
  </div>
</template>

<script>
import RepositoryItem from '../components/repository/RepositoryItem'

export default {
  components: { RepositoryItem },
    component: {
        RepositoryItem,
    },
    computed: {
        repositories(){
            return this.$store.state.repositories;
        }
    },
    created(){
        const userId = this.$route.params.userId;
        this.$store.dispatch('FETCH_REPOSITORIES', userId);
    }

}
</script>

<style scoped>
ul {
    list-style: none;
    margin:0;
    padding:0;
}
.repositories-container {
    margin-left: 15rem;
    margin-right: 15rem;
}

</style>