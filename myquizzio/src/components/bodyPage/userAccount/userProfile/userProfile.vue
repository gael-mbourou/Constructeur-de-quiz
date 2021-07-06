<template>
    <b-container class="bv-example-row">
        
            <b-row class="justify-content-md-center">
                <b-col sm="6">
                    <myavatar></myavatar>
                </b-col>
                <b-col sm="6"></b-col>
            </b-row>
            <b-row class="justify-content-md-center">
                <b-col sm="5">
                   <b-form-input id="input-small" size="sm" placeholder="Nom"></b-form-input>
                </b-col>
                <b-col sm="5">
                    <b-form-input id="input-small" size="sm" placeholder="Email"></b-form-input>
                </b-col>
            </b-row>
            <b-row class="justify-content-md-center">
                <b-col sm="5">
                   <b-form-input id="input-small" size="sm" placeholder="adress"></b-form-input>
                </b-col>
                <b-col sm="5">
                    <b-form-input id="input-small" size="sm" placeholder="Téléphone"></b-form-input>
                </b-col>
            </b-row>
            <b-row class="justify-content-md-center">
                <b-col sm="5">
                   <b-form-input id="input-small" size="sm" placeholder="mot de passe"></b-form-input>
                </b-col>
                <b-col sm="5">
                    
                </b-col>
            </b-row>
            <b-row class="justify-content-md-center">
                <b-col sm="5">
                   <b-button variant="outline-primary">Enregistrer</b-button>
                </b-col>
                <b-col sm="5">
                    
                </b-col>
            </b-row>
        
  </b-container>
</template>

<script>
import  myavatar  from './Avatar.vue'

export default{
    name:'userProfile',
    components :{
        myavatar,
    }
    
}
</script>
