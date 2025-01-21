<template>
  <mainpage msg="Welcome to Your Vue.js App"/>
</template>

<script>
import mainpage from './components/mainpage.vue'

export default {
  name: 'App',
  components: {
    mainpage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
body {
  background: #000;
}
</style>