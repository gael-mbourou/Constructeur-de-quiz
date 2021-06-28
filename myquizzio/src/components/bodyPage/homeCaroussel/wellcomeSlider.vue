<template>
 <div id="myapp">
    <v-app id="inspire">
        <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
        <template v-slot:prev="{ on, attrs }">
            <v-btn color="success" v-bind="attrs" v-on="on">Previous slide</v-btn>
        </template>
        <template v-slot:next="{ on, attrs }">
            <v-btn color="info" v-bind="attrs" v-on="on">Next slide</v-btn>
        </template>
        <v-carousel-item v-for="(myslide, i) in slides" :key="i">
            <v-sheet height="100%">
            <v-row class="fill-height" align="center" justify="center">
              <v-col>
                <div class="text-h1">
                {{ myslide }}
                <Bouton :quelLien="lienBouton[i]"/>
                </div>
              </v-col>
              <v-col>
                <v-img max-height="350" max-width="400" v-bind:src="ImageSlider[i]"></v-img>
              </v-col>
                
            </v-row>
            </v-sheet>
        </v-carousel-item>
        </v-carousel>
    </v-app>
    </div>
</template>

<script>
import Bouton from './carousselButton.vue'
export default{
    name :'wellcomeSlider',
    components:{
      Bouton,
    },
    data () {
    return {
      ImageSlider:['https://gad-digital.com/gad-digital_uploads/2021/06/Cquiz.jpg','https://gad-digital.com/gad-digital_uploads/2021/06/quiz_answers.jpg'],
     
      lienBouton:['https://gad-digital.com/','https://maisondemisericorde.com/'],
      colors: [
        'indigo',
        'warning',

      ],
      slides: [
        'Créez vos Quiz',
        'Répondez aux quizz',
      ],
    }
  },
}
</script>

<style scoped>
.imSlide{
max-width:50%;
max-height:50%;
}
 .text-h1{
  font-size: 30px !important;
  font-weight:700;
 }
</style>

