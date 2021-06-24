<template>
    <v-app>

      <v-app-bar
          app
          color="primary"
          dark
        >
        <logo-app></logo-app>
        <v-spacer></v-spacer>
        <navigation-menu></navigation-menu>
        </v-app-bar>
    </v-app>
</template>

<script>
//import HeaderNav from './navigationMenu.vue'
import LogoApp  from './LogoApp.vue'
import navigationMenu from './navigationMenu.vue'

export default{
    name:'HeaderApp',
    components:{
        'logo-app': LogoApp,
        'navigation-menu':navigationMenu,
  
    },
    data: () => ({ value: 1 }),
    
}
</script>

<style scoped>

</style>
