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
    /*  methods:{
        usedLink:function(){
          if(this.choix=0){
             return 'https://gad-digital.com/';
          }else if(this.choix=1){
             return 'https://maisondemisericorde.com/';
          }
        }
      }*/
  }
</script>

<style scoped>

</style>

