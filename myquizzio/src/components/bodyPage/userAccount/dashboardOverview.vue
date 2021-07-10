<template>
  <div class="dbContent">
    <b-row>
        <b-col cols="6" md="4">
            <numberOfQuiz></numberOfQuiz>
        </b-col>
        <b-col cols="6" md="4">
            <numberOfParticipant></numberOfParticipant>
        </b-col>
        <b-col cols="6" md="4">
            <AccountInfo></AccountInfo>
        </b-col>
  </b-row><br/>
  <b-alert show variant="primary"> 
    </b-alert>
    <b-row>
    <b-col sm="5">
    <embendedContent class="embendedWidth"></embendedContent>
    </b-col>
    <b-col sm="7"><welcomToUserAccount/></b-col>
  </b-row>
  </div>
</template>
<script>
import numberOfQuiz from './dashboardContent/numberOfQuiz.vue'
import numberOfParticipant from './dashboardContent/numberOfParticipants.vue'
import AccountInfo from './dashboardContent/AccountInfo.vue'
import welcomToUserAccount from './dashboardContent/welcomToUserAccount.vue'
import embendedContent from './dashboardContent/embendedContent.vue'
export default{
    name:'dashboardOverview',
    components:{
        numberOfQuiz,
        numberOfParticipant,
        AccountInfo,
        welcomToUserAccount,
        embendedContent,
    }
}
</script>

<style scoped>
.dbContent{
    padding:5px;
}
.embendedWidth{
    width:100%,
}
</style>
