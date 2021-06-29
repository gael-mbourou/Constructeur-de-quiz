<template>
  <div>
    <v-btn
      class="ma-2"
      outlined
       :href="quelLien">
      Testez maintenent

    </v-btn>
  </div>
</template>

<script>
  export default {
      name:'TestingBouton',
      Lien:'quelLien',
      props:['quelLien',]
  }
</script>

<style scoped>

</style>

