<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app class="pt-4" color="grey lighten-3" mini-variant permanent
        expand-on-hover>
            <v-navigation-drawer
        permanent
        expand-on-hover
      >
        <v-list>
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                Sandra Adams
              </v-list-item-title>
              <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list
          nav
          dense
        >
          <v-list-item link v-on:click="component = 'dashboardOverview'">
            <v-list-item-icon>
              <BIconGrid1x2 font-scale="1.1" variant="primary" ></BIconGrid1x2>
            </v-list-item-icon>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item>
          <v-list-item link v-on:click="component='userProfile'">
            <v-list-item-icon>
              <BIconPerson font-scale="1.1" variant="primary"></BIconPerson> 
            </v-list-item-icon>
            <v-list-item-title>Mon profile</v-list-item-title>
          </v-list-item>
          <v-list-item link v-on:click="component='newQuiz'">
            <v-list-item-icon>
              <BIconPlus font-scale="1.1" variant="primary"></BIconPlus>
            </v-list-item-icon>
            <v-list-item-title>Nouveau quiz</v-list-item-title>
          </v-list-item>
          <v-list-item link v-on:click="component='listOfQuiz'">
          <v-list-item-icon>
              <BIconEye font-scale="1.1" variant="primary"></BIconEye>
            </v-list-item-icon>
            <v-list-item-title>Mes quiz</v-list-item-title>
          </v-list-item>
          <v-list-item link v-on:click="component='listOfParticipant'">
          <v-list-item-icon>
              <BIconPersonCheck font-scale="1.1" variant="primary"></BIconPersonCheck>
            </v-list-item-icon>
            <v-list-item-title>Participants</v-list-item-title>
          </v-list-item>
          <v-divider class="my-2"></v-divider>
            <v-list-item link color="grey lighten-4" @click="goToHome">
                <v-list-item-content>
                <v-list-item-title><BIconBoxArrowRight font-scale="1.1" variant="danger"></BIconBoxArrowRight>
                  Déconnexion
                </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-navigation-drawer>

    <v-main>
      <!--  -->
      <component :is="component"></component>
    </v-main>
  </v-app>
</template>

<script>
import newQuiz from './quizGenerator/newQuiz.vue'
import userProfile from './userProfile/userProfile.vue'
import listOfParticipant from './participants/listeOfParticipants.vue'
import listOfQuiz from './quizToAnswer/ListeOfQuiz.vue'
import dashboardOverview from './dashboardOverview.vue'

import { BIconGrid1x2,BIconPerson,BIconEye,BIconPersonCheck } from 'bootstrap-vue'
  export default {
    name:'userDashboard',
    data(){
      return{
        component:'dashboardOverview',
      }
    },
        components:{
     // dashboardDesktopHeader,
      dashboardOverview,
      newQuiz,
      userProfile,
      listOfParticipant,
      listOfQuiz,
      BIconPerson,
      BIconGrid1x2,
      BIconEye,
      BIconPersonCheck,
    },
    methods:{
      goToHome(){
        this.$router.push('/')
      }
    }
  }
</script>