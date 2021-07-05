<template>
  <div>
    <div class="mt-3">Bonne réponse : <strong>{{ selected }}</strong></div>
    <b-form-group v-slot="{ ariaDescribedby }">
        
      <b-button variant="light" @click="choice1"><b-form-checkbox v-model="selected" :aria-describedby="ariaDescribedby" name="some-checkboxs" value="1" >1</b-form-checkbox></b-button>
      <b-button variant="light" @click="choice2"><b-form-checkbox v-model="selected" :aria-describedby="ariaDescribedby" name="some-checkboxs" value="2">2</b-form-checkbox></b-button>
      <b-button variant="light" @click="choice3"><b-form-checkbox v-model="selected" :aria-describedby="ariaDescribedby" name="some-checkboxs" value="3">3</b-form-checkbox></b-button>

    </b-form-group>

    
  </div>
</template>

<script>
  export default {
      name:'mygoodAnswer',
    data() {
      return {
        selected: '',      
      }
    },
    props:['step'],
    methods:{
        choice1(){
            this.$emit('theGoodAnswer',{reponse: 1, step: this.step})
        },
        choice2(){
            this.$emit('theGoodAnswer',{reponse: 2, step: this.step})
           
        },
        choice3(){
            this.$emit('theGoodAnswer',{reponse: 3, step: this.step})
        }
    }
  }
</script>

