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
  </b-row>
  <welcomToUserAccount/>
  </div>
</template>
<script>
import numberOfQuiz from './dashboardContent/numberOfQuiz.vue'
import numberOfParticipant from './dashboardContent/numberOfParticipants.vue'
import AccountInfo from './dashboardContent/AccountInfo.vue'
import welcomToUserAccount from './dashboardContent/welcomToUserAccount.vue'
export default{
    name:'dashboardOverview',
    components:{
        numberOfQuiz,
        numberOfParticipant,
        AccountInfo,
        welcomToUserAccount,
    }
}
</script>

<style scoped>
.dbContent{
    padding:5px;
}
</style>
