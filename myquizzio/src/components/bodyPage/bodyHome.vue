<template>
  <div>
    <header-app></header-app>
    <wellcome-slider></wellcome-slider>
    <advantages/>
    <free-testing-content></free-testing-content>
  </div>
</template>


<script>
import HeaderApp from '../headerTop/HeaderApp.vue'
//import HeaderApp from './components/headerTop/HeaderApp'
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
        'header-app':HeaderApp,
    }
}
</script>

<style>
.v-application--wrap {
    flex: 1 1 auto;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    min-height: 0vh !important;
    max-width: 100%;
    position: relative;
}
</style>