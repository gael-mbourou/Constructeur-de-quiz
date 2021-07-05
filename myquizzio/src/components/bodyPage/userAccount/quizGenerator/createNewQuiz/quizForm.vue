<template>
 <div>
    <h2> {{FormTitle}}</h2>
    <p>Nombre de question : {{TotalQuestion}} </p>
    <b-form @submit="onSubmit" @reset="onReset">
      <div :id="GAQ[n-1]" v-for="n in step" :key="n">
        <b-form-group label-for="input-1">
            <v-label>question {{n}}</v-label>
            <b-form-input class="input-1" v-model="form.question[n-1]" type="text" required >
            </b-form-input>
        </b-form-group>

        <b-row>
          <b-col cols="9">
          
          <b-form-group class="input-group-2" label="Réponse 1" label-for="input-2">
            <b-form-input  v-model="form.ROne[n-1]" required></b-form-input>
          </b-form-group>
        
          <b-form-group class="input-group-3" label="Réponse 2" label-for="input-3">
              <b-form-input  v-model="form.RTwo[n-1]" required></b-form-input>
          </b-form-group>
         

          <b-form-group class="input-group-4" label="Réponse 3" label-for="input-4">
              <b-form-input  v-model="form.RThree[n-1]" required></b-form-input>
          </b-form-group>
         

          </b-col>
          <b-col><mygoodAnswer v-on:theGoodAnswer="goodAnswer" :step="n"></mygoodAnswer> 
          </b-col>
          
        </b-row>
        <br/>
          <v-divider class="my-2"></v-divider><br/>

      </div>

            <b-button variant="primary" v-if="nextBtn" @click="stepQuestions">Question quivante</b-button>
            <b-button type="submit" variant="danger" v-if="submitBtn">terminer</b-button>
      
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }} Bonne réponse : {{goodAnwsers}}</pre>
    </b-card>
 </div>
</template>

<script>
import mygoodAnswer from './goodAnswer.vue'

export default {
    name:'quizform',
    components:{
    mygoodAnswer,
    },
    props:['FormTitle','nombreDeQuestion','chargeTabId'],
    data(){
        return{
          TotalQuestion:parseInt(this.nombreDeQuestion),
          
          GAQ:[], //on stock les id "input-group-1"
          step:1,
          submitBtn:false,
          nextBtn:true,
          i:0,
          
          goodAnwsers:[],// stock les bonnes réponse
          form: {
            question: [],
            ROne: [],
            RTwo: [],
            RThree: [], 
          },
        }
    },
    methods: {

      //revoir la fonction qui rempli le tableau qui contient les id
      remplirTab(){
        for(this.i = 0 ; this.i < this.TotalQuestion ; this.i++){
            this.x=this.i + 1
            this.GAQ.push("input-group-"+this.x)
        }
      },
       //cette fonction rempli le tableau des bonne réponses GAQ
      goodAnswer(event){
    
        console.log(event);
        if(this.step > this.goodAnwsers.length){
          this.goodAnwsers.push(event.reponse) //on ajoute une bonne réponse si le nombre d'étape est supérieur à la taille du tableau qui contient les bonnes réponse
        }else {
          this.goodAnwsers.splice(event.step - 1, 1,event.reponse)
        }        
      },
      //Affiche les question étape par étape
      stepQuestions(){
        this.thisStep=this.step+1
       if(this.thisStep <= this.TotalQuestion){
         console.log('Etape actuelle '+this.thisStep)
         if(typeof this.GAQ !== 'undefined' && this.GAQ.length == 0 ){
          this.remplirTab() //remplissage du tableau qui contien les id en vérifiant qu'il est défini et qu'il est vide
         }
          this.step ++
       }
       if(this.thisStep == this.TotalQuestion){
         this.submitBtn = true
         this.nextBtn= false
       }
       
      },

      onSubmit(event) {
        event.preventDefault()
        this.onReset
      },
      onReset() {
        // Reset our form values in each tab
        this.form.question = []
        this.form.ROne = []
        this.form.RTwo = []
        this.form.RThree = []
        // Trick to reset clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
    },
}
</script>

<style scoped>

</style>

