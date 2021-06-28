<template>
  <div>
    <wellcome-slider></wellcome-slider>
  </div>
</template>


<script>
//import wellcomeSlider from './bodypage/wellcomeSlider.vue'
import wellcomeSlider from './homeCaroussel/wellcomeSlider.vue'
export default {
    name :'bodyHome',
    components:{
        'wellcome-slider':wellcomeSlider,
    }
}
</script>

<style scoped>
    
</style>