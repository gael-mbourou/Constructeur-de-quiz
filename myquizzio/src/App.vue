<template>
  <div id="app">
    <header-app></header-app>
    
  </div>
</template>

<script>
import HeaderApp from './components/HeaderApp.vue'

export default {
  name: 'App',
  components: {
    'header-app' : HeaderApp
  }
}
</script>

<style>
#app {
 /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/
}
</style>
