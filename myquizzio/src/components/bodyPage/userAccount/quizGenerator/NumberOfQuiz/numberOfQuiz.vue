<template>
  <div>
    <b-form>
      <b-form-group
        id="input-group-1"
        label="Titre du questionnaire:"
        label-for="input-1"
        description="Les titre du questionnaire permettra au participants de mieux situer le questionnaire par rappor à leur notions."
      >
        <b-form-input
          id="input-1"
          v-model="form.quizTitle"
          type="text"
          placeholder="Titre"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Nombre de questions:"
        label-for="input-2"
        
      >
        <b-form-input
          id="input-1"
          v-model="form.nbOfQuestion"
          type="number"
          placeholder="entrez un chiffre"
          required
        ></b-form-input>
      </b-form-group><br/>

      <b-button type="submit" v-on:click="quizSettingform" variant="primary">Soumettre</b-button>
    </b-form>
  </div>
</template>

<script>
  export default {
    name:'numberOfQuiz',
    data() {
      return {
        form: {
          quizTitle:'',
          nbOfQuestion: '',
        },
      }
    },
    methods: {
      quizSettingform(event){
        if(this.form.nbOfQuestion > 0){
          event.preventDefault()
          this.$emit('QuizTitle',this.form.quizTitle)
          this.$emit('QuizNmber',this.form.nbOfQuestion)
          this.$emit('HideMe')
        }else{
          event.preventDefault()
          alert('entrez une valeur supérieur à 0')
        }
      },
    }
  }
</script>