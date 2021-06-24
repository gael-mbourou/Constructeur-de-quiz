<template>
  <div>
    <logo-app></logo-app>
  </div>
</template>

<script>
import LogoApp  from './LogoApp.vue'
//import HeaderLogo from './HeaderLogo.vue'

export default{
    name:'HeaderApp',
    components:{
        'logo-app': LogoApp
    }
    
}
</script>

<style scoped>

</style>
