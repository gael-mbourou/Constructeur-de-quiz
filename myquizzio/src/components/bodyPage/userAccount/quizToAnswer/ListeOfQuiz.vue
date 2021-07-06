<template>
  <div>
    <h2>Liste des participants</h2>

    <p>Les participants au quiz:<p/>
    <b-row>
    <b-col ></b-col>
    <b-col md="8">
      <div v-for="i in 30" :key="i">
        <b-list-group style="max-width: 100%;">
          <b-list-group-item class="d-flex align-items-center">
            <h3>Titre du quiz</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, odit inventore magni beatae officia corporis tempore aliquid ducimus asperiores, pariatur suscipit porro quia, dolores temporibus quisquam eius facilis expedita ratione?</p>
            <span class="mr-auto">Super Kitty</span>
            <b-badge>9</b-badge>
          </b-list-group-item>
        </b-list-group>
      </div>
    </b-col>
    <b-col ></b-col>
  </b-row>
  </div>
</template>

<script>

    export default {
       name:'listOfQuiz' 
    }
</script>