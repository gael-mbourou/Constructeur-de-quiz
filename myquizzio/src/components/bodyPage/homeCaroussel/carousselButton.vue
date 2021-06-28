<template>
  <div>
    <v-btn
      class="ma-2"
      outlined
      color="indigo" :href="quelLien">
      Testez maintenent

    </v-btn>
  </div>
</template>

<script>
  export default {
      name:'Bouton',
      Lien:'quelLien',
      props:['quelLien']
  }
</script>

<style scoped>

</style>

