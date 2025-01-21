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
html, body {
  margin: 0; /* Remove all margins */
  padding: 0; /* Remove all paddings */
  height: 100%; /* Ensure the height covers the viewport */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 0;
}

body {
  background: #000; /* Set the background color */
  overflow-x: hidden; /* Prevent horizontal scrolling */
}

</style>