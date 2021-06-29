<template>
 <div id="myapp">
    <v-app id="inspire">
        <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
        <v-carousel-item v-for="(myslide, i) in slides" :key="i">
            <v-sheet :color="colors[i]" height="100%">
            <v-row class="fill-height" align="center" justify="center">
              <v-col>
                <div class="text-h1">
                {{ myslide }}
                </div>
                <testCaroussel :contenuTextuel="TexteCaroussel[i]"></testCaroussel>
                <TestingBouton :quelLien="lienBouton[i]"/>
              </v-col>
              <v-col>
                <v-img max-height="550" max-width="600" v-bind:src="ImageSlider[i]"></v-img>
              </v-col>
                
            </v-row>
            </v-sheet>
        </v-carousel-item>
        </v-carousel>
    </v-app>
    </div>
</template>

<script>
import TestingBouton from './carousselButton.vue'
import testCaroussel from './textCaroussel.vue'
export default{
    name :'wellcomeSlider',
    components:{
      TestingBouton,
      testCaroussel,
    },
    data () {
    return {
      ImageSlider:['https://gad-digital.com/gad-digital_uploads/2021/06/quiz_a_distance.png','https://gad-digital.com/gad-digital_uploads/2021/06/quiz_answers.png'],
      TexteCaroussel:['Fini avec les questionnaires papier','révisez vos notions par des quiz en ligne'],
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
  color:#fff;
 }
</style>

