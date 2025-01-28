<template>
  <div id="app">
    <!-- Removed the header and nav section -->
    <!-- This is where the routed components will be displayed -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 0;
}

body {
  background: #000;
  overflow-x: hidden;
}



header {
  background-color: #222;
  padding: 1rem;
}

nav a {
  color: #fff;
  text-decoration: none;
  margin: 0 10px;
}

nav a.router-link-active {
  font-weight: bold;
  text-decoration: underline;
}

/* Optional: You can leave the rest of the styles, or remove any specific styles if not needed */
</style>