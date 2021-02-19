<template>
  <header class="header-container">
      <img src="@/assets/auth/GitHub-Mark.png"/>
      <search-view :placeholder="'GitHubName을 입력해주세요'"></search-view>
      <div class="button-container">
        <base-button :to="`/login`" :link="true">로그인</base-button>
        <base-button>회원가입</base-button>
        <base-button>로그아웃</base-button>
      </div>
  </header>
</template>
<script>
import SearchView from './SearchView'
import BaseButton from '../../ui/BaseButton'

export default {
    data() {
      return {
        limitPosition: 500,
        scrolled: false,
        lastPosition: 0
    }
  },  
  components : { SearchView, BaseButton },
  methods: { 
    logout() {
      console.log('logout')
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }  
};
</script>

<style scoped>
header {
    background-color: #161b22;
    display: flex;
    padding: 8px;
    align-items: center;
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
.button-container {
    height: 100%;
    text-align: center;
}
.button-container:before {
    content: ""; display: inline-block;
    width: 1px; height: 100%;
    margin-right: 0; vertical-align: middle;
}
#search-input {
  width:20%;
  margin-left: 0.5rem;
}
</style>
