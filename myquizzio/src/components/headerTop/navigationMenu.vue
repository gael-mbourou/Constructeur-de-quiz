<template>
  <div>
     <v-btn
        :href="loginLink"
        target="_blank"
        text
      >
        <span class="mr-2">Login/Register</span>
        <BIconLock font-scale="1.5"></BIconLock>
      </v-btn>
  </div>
</template>

<script>
import { BIconLock} from 'bootstrap-vue'

  export default {
      name:'navigationMenu',
      components:{
      BIconLock,
      },
      data(){
        return{
          loginLink:'/login',
        }
      }
  }
</script>

<style scoped>

</style>
