<template>
  <div>
    <h2 class="text-center">Créez un nouveau quiz</h2>
    <b-row>
      <b-col></b-col>
      <b-col cols="10">
        <numberOfQuiz v-on:QuizTitle="GetTitle" v-on:QuizNmber="GetNmberOfQuestion" v-if="formOne" v-on:HideMe="HidenumberOfQuiz"></numberOfQuiz>
        <quizform :FormTitle="montitre" :nombreDeQuestion="nMberQ" v-if="myquizform"></quizform>
        <b-alert show>bonjour voici une alerte </b-alert>
      </b-col>
      <b-col></b-col>
  </b-row>
  </div>
</template>
<script>
import numberOfQuiz  from './NumberOfQuiz/numberOfQuiz.vue'
import quizform from './createNewQuiz/quizForm.vue'
export default {
    name:'newQuiz',
    data(){
      return{
        montitre:'test',
        nMberQ:0,
        formOne:true,
        myquizform:false,
      }
    },
    components:{
      numberOfQuiz,
      quizform,
    },
    methods:{
      GetTitle(e){
        this.montitre = e;
       console.log("titre du quiz : "+this.montitre);
      },
      GetNmberOfQuestion(a){
        this.nMberQ = a;
        console.log("Nombre de question : "+this.nMberQ);
      },

      HidenumberOfQuiz(){
        this.formOne = !this.formOne;
        this.myquizform=true;
      }
    }
    
}
</script>
