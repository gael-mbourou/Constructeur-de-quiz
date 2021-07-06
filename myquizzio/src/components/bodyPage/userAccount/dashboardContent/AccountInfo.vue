<template>
<b-card title="Moyenne réponses" sub-title="important">
    <b-card-text>
         <b-row>
          <b-col><BIconTrophy font-scale="4" variant="primary"/></b-col>
          <b-col><h1>86%</h1>répondu</b-col>
        </b-row>
    </b-card-text>
    <a href="#" class="card-link">Voir les résultats</a>
  </b-card>
</template>

<script>
import { BIconTrophy } from 'bootstrap-vue'
    export default{
        name:'AccountInfo',
        componenents:{
          BIconTrophy,
        }
    }
</script>