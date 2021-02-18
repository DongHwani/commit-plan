<template>
  <header>
      <search-view></search-view>  
      <router-link to="/login">Login</router-link>
      <router-link to="/login">Logout</router-link>
  </header>
</template>
<script>
import SearchView from './SearchView'

export default {
  components : { SearchView },
  methods: {
    logout() {
      console.log('logout')
    },
  },
};
</script>

<style scoped>
.header-search {
  padding: 0.5rem;
}

header {
    background-color: #161b22;
    display: flex;
    padding: 8px;
}

header a {
  text-decoration: none;
  color: white;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}


header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
</style>
