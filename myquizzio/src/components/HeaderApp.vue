<template>
    <v-app>

      <v-app-bar
          app
          color="primary"
          dark
        >
        <logo-app></logo-app>

          <v-spacer></v-spacer>

          <v-btn
            href="https://github.com/vuetifyjs/vuetify/releases/latest"
            target="_blank"
            text
          >
            <span class="mr-2">Latest Release</span>
            <v-icon>mdi-open-in-new</v-icon>
          </v-btn>
        </v-app-bar>
    </v-app>
</template>

<script>
import LogoApp  from './LogoApp.vue'
//import HeaderLogo from './HeaderLogo.vue'

export default{
    name:'HeaderApp',
    components:{
        'logo-app': LogoApp
    },
    data: () => ({ value: 1 }),
    
}
</script>

<style scoped>

</style>
