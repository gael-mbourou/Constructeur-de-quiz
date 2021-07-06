<template>
  <v-app id="inspire">

    <dashboardDesktopHeader></dashboardDesktopHeader>
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <!--dashboardSideBar></dashboardSideBar-->
                <v-list color="transparent">
                    <v-list-item link v-on:click="toDisplayMyDb"> 
                    <v-list-item-content>
                        <v-list-item-title>
                            <!--List Item {{ n }}-->
                            <BIconGrid1x2 font-scale="1.1" variant="primary" ></BIconGrid1x2> Dashboard
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link v-on:click="toDisplayMyP"> 
                    <v-list-item-content>
                        <v-list-item-title>
                            <!--List Item {{ n }}-->
                            <BIconPerson font-scale="1.1" variant="primary"></BIconPerson> Mon profile
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link v-on:click="toDisplayNquiz"> 
                    <v-list-item-content>
                        <v-list-item-title>
                            <!--List Item {{ n }}-->
                            <BIconPlus font-scale="1.1" variant="primary"></BIconPlus> Nouveau quiz
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link v-on:click="toDisplayMyQ">
                    <v-list-item-content>
                        <v-list-item-title>
                            
                            <BIconEye font-scale="1.1" variant="primary"></BIconEye> Mes quiz
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                    <v-list-item link >
                    <v-list-item-content>
                        <v-list-item-title v-on:click="toDisplayParticipant">
                            <BIconPersonCheck font-scale="1.1" variant="primary"></BIconPersonCheck> Participants
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item link color="grey lighten-4" >
                    <v-list-item-content>
                    <v-list-item-title><BIconBoxArrowRight font-scale="1.1" variant="danger"></BIconBoxArrowRight>
                      Déconnexion
                    </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                </v-list>

            </v-sheet>
          </v-col>
            
          <v-col>
            
 
            <v-sheet min-height="70vh" rounded="lg" >
              <dashboardOverview v-if="Db"></dashboardOverview>
              <userProfile v-if="userP" ></userProfile>
              <newQuiz v-if="nQ"  ></newQuiz>
              <listOfQuiz v-if="LQ"></listOfQuiz>
              <listOfParticipant v-if="PQ"></listOfParticipant>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import dashboardDesktopHeader from './DashboardDesktopHeader.vue'
import newQuiz from './quizGenerator/newQuiz.vue'
import userProfile from './userProfile/userProfile.vue'
import listOfParticipant from './participants/listeOfParticipants.vue'
import listOfQuiz from './quizToAnswer/ListeOfQuiz.vue'
import dashboardOverview from './dashboardOverview.vue'
  export default {
      name:'userDashboard',
    data: () => ({
     userP:true,
     nQ:false,
     PQ:false,
     LQ:false,
     Db:false,
     displayme:0,
     displaycontent:'',
    }),
    components:{
      dashboardDesktopHeader,
      dashboardOverview,
      newQuiz,
      userProfile,
      listOfParticipant,
      listOfQuiz,

    },
    methods:{
      toDisplayMyDb(){
    this.userP=false
    this.nQ=false
    this.LQ=false
    this.PQ=false
    this.Db=true
      },
      toDisplayMyP(){
    this.userP=true
    this.nQ=false
    this.LQ=false
    this.PQ=false
    this.Db=false
    console.log('show profile dans le parent')
      },
      toDisplayNquiz(){
        this.userP=false
        this.nQ=true
        this.LQ=false
        this.PQ=false
        this.Db=false
        console.log('show Quiz dans le parent')
      },
      toDisplayMyQ(){
        this.userP=false
        this.nQ=false
        this.LQ=true
        this.PQ=false
        this.Db=false
      },
      toDisplayParticipant(){
        this.userP=false
        this.nQ=false
        this.LQ=false
        this.PQ=true
        this.Db=false
      }
    }
  }
</script>