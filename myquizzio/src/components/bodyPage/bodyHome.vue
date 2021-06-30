<template>
  <div>
    <wellcome-slider></wellcome-slider>
    <advantages/>
    <free-testing-content></free-testing-content>
  </div>
</template>


<script>
//import HeaderApp from '../headerTop/HeaderApp.vue'
import advantages from './homeContent/advantagesOne/advantages.vue'
import wellcomeSlider from './homeCaroussel/wellcomeSlider.vue'
import freeTestingContent from './homeContent/advantagesTwo/freeTesting.vue'
export default {
    name :'bodyHome',
    components:{
        'wellcome-slider':wellcomeSlider,
        advantages,
        'free-testing-content':freeTestingContent,
        //'header-app':HeaderApp,
    }
}
</script>

<style scoped>

</style>