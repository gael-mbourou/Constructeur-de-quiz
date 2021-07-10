<template>
  <div>
     <v-btn
        target="_blank"
        text
        @click="goTouserAccount"
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
         
        }
      },
      methods:{
        goTouserAccount(){
        this.$router.push('/useraccount')
      }
      }
  }
</script>

<style scoped>

</style>
