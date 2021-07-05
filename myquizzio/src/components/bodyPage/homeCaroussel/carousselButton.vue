<template>
  <div>
    <v-btn
      class="ma-2"
      outlined
       :href="choix[quelLien]">
      Testez maintenent

    </v-btn>
  </div>
</template>

<script>
  export default {
      name:'TestingBouton',
      props:['quelLien'],
      data(){
        return{
          choix:['https://gad-digital.com/','https://maisondemisericorde.com/','/login'],
        }
      },

  }
</script>

<style scoped>

</style>

