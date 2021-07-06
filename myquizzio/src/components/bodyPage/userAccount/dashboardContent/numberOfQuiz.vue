<template>
<b-card title="Nombre de quiz" sub-title="déjà publié">
    <b-card-text class="text-center">
    <b-row>
      <b-col><BIconFileEarmarkText font-scale="4" variant="primary"/></b-col>
      <b-col><h1>86</h1>Questionnaires</b-col>
    </b-row>
    
      
    </b-card-text>

    <a href="#" class="card-link">Voir les quiz</a>
  </b-card>
</template>

<script>
import { BIconFileEarmarkText } from 'bootstrap-vue'
    export default{
        name:'numberOfQuiz',
        componenents:{
          BIconFileEarmarkText,
        }
    }
</script>