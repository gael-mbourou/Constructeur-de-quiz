<template>
    <b-container class="freetesting">
  <b-row>
    <b-col>
        <b-img :src="LienImage[0]" fluid alt="Fluid image" max-height="550" max-width="600"></b-img>
    </b-col>
    <b-col>
        <h1>Tester Gratuitement</h1><br/><p>La construction d\'un questionnaire se fait en quelques clics. Glissez-déposez vos questions dans l\'interface de construction et rédigez vos questions. Attribuez des notes pour évaluer les connaissances, ajoutez un minuteur et proposez un texte de correction.</p>
        <TestingBouton></TestingBouton>
    </b-col>
  </b-row>
</b-container>
</template>

<script>
import TestingBouton from '../../homeCaroussel/carousselButton.vue'
    export default {
        name:'freeTestingContent',
        data(){
            return{
                LienImage:['https://gad-digital.com/gad-digital_uploads/2021/06/Kids-Studying-from-Home-pana.png'],
                TexteContent:'La construction d\'un questionnaire se fait en quelques clics. Glissez-déposez vos questions dans l\'interface de construction et rédigez vos questions. Attribuez des notes pour évaluer les connaissances, ajoutez un minuteur et proposez un texte de correction. ',
                TexteTitle:'Tester Gratuitement',
            }
        },
        components:{
            TestingBouton,
        }

    }
</script>

<style scoped>

</style>