<template>
  <v-app>
    <v-main>
      <header-app></header-app>
     
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import HeaderApp from './components/headerTop/HeaderApp'

export default {
  name: 'App',

  components: {
    'header-app':HeaderApp,
  
  },

  data: () => ({
    //
  }),
};
</script>

<style>
.v-application--wrap {
    flex: 1 1 auto;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    min-height: 0vh;
    max-width: 100%;
    position: relative;
    }
</style>
