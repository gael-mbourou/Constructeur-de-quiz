<template>
    <div class="loginFonm">
        <h4>Inscription</h4>
        <label >Nom</label>
        <b-form-input type="text" v-model="name" ></b-form-input>
        <label >Adresse email</label>
        <b-form-input v-model="myemail" ></b-form-input>
        <label >mot de passe</label>
        <b-form-input v-model="mypassword" ></b-form-input>
        <div class="mt-2">email: {{ myemail }}<br/>mot de paasse :{{ mypassword }}</div>
        
    <b-row >
        <b-col><b-link href="#foo" v-on:click="hideregister()">J'ai un compte</b-link></b-col>
        <b-col class="text-right"><b-button variant="primary">Inscription</b-button></b-col>
  </b-row>
    </div>
</template>

<script>
  export default {
      name:'registerginform',
    data() {
      return {
        name:'',
        myemail: '',
        mypassword: '',
      }
    },
    methods:{
        hideregister:function(){
            this.$emit('HideRegister')
        }
    }
  }
</script>
<style scoped>
.loginFonm{
    padding: 25px;
}
</style>