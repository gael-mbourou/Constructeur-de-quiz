<template>
  <v-app id="inspire">

    <dashboardDesktopHeader></dashboardDesktopHeader>
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <dashboardSideBar></dashboardSideBar>
            </v-sheet>
          </v-col>
            
          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
              <!--  -->
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import dashboardDesktopHeader from './DashboardDesktopHeader.vue'
import dashboardSideBar from './desktopSideBar.vue'
  export default {
      name:'userDashboard',
    data: () => ({
     //mettre ici les données traitées
    }),
    components:{
      dashboardDesktopHeader,
      dashboardSideBar,
    }
  }
</script>