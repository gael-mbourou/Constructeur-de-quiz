<template>
  <div>
    <b-container class="bv-example-row">
        <b-row class="text-center">
            <b-col></b-col>
            <b-col cols="6"><h1>Merci de choisir myquizzio</h1></b-col>
            <b-col></b-col>
        </b-row>
    </b-container>
      <v-card
    class="mx-auto"
    max-width="544"
  >
    <userloginform v-if="loginComponent" v-on:HideLogin="displayregisterform()"></userloginform>
    <registerginform v-if="registerComponent" v-on:HideRegister="displayloginform()"></registerginform>
  </v-card>
  </div>
</template>
<script>
import userloginform from '../loginPage/login.vue'
import registerginform from './register.vue'
export default {
    name:'connexionPage',
    data(){
        return{
        loginComponent:true,
        registerComponent:false,
        }
    },
    components:{
        userloginform,
        registerginform,
    },
    methods:{
        displayloginform:function(){
            this.loginComponent=true
            this.registerComponent=false
        },
        displayregisterform:function(){
            this.loginComponent=false
            this.registerComponent=true
        },
    }
}
</script>
