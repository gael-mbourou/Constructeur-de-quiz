<template>
<b-card title="Nombre de participants" sub-title="vous avez">
    <b-card-text>
      <b-row>
        <b-col><BIconBezier font-scale="4" variant="primary"/></b-col>
        <b-col><h1>354</h1>Personnes </b-col>
      </b-row>
    </b-card-text>
    <a href="#" class="card-link">Voir les participants</a>
  </b-card>
</template>

<script>
import { BIconBezier } from 'bootstrap-vue'
    export default{
        name:'numberOfParticipant',
        componenents:{
          BIconBezier,
         
        }
    }
</script>