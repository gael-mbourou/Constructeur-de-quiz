<template>
    <div class="loginFonm">
        <label >Nom</label>
        <b-form-input type="text" v-model="myemail" ></b-form-input>
        <label >mot de passe</label>
        <b-form-input type="password" v-model="pass" ></b-form-input>
        <b-link href="#foo">Mot de passe oublié</b-link>
        <div class="mt-2">email: {{ myemail }}<br/>mot de paasse :{{ pass }}</div>
        
    <b-row >
        <b-col><b-button variant="outline-primary" v-on:click="hidelogin()">Créer un compte</b-button></b-col>
        <b-col class="text-right"><b-button variant="primary">Connexion</b-button></b-col>
  </b-row>
    </div>
</template>

<script>
  export default {
      name:'userloginform',
    data() {
      return {
        myemail: '',
        pass: '',
      }
    },
    methods:{
        hidelogin:function(){
            this.$emit('HideLogin')
        }
    }
  }
</script>
<style scoped>
.loginFonm{
    padding: 25px;
}
</style>