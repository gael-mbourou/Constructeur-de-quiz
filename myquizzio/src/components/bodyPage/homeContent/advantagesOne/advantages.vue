<template>
    <div class="myad">
        <b-container class="bv-example-row " >
            <b-row >
                <b-col md="6" offset-md="3" class="text-center" ><h2 >{{ChosenOne[0]}}</h2><br/>
                <p>{{ChosenOne[1]}}</p>
                </b-col>
            </b-row>
        </b-container>
         <b-row align-h="center">
            <b-col col sm="3"><center><BIconGear font-scale="2" variant="primary" ></BIconGear><br/> <p>{{ChosenTwo[0]}}</p></center></b-col>
            <b-col col sm="3"><center><BIconGraphUp font-scale="2" variant="warning"></BIconGraphUp > <br/><p>{{ChosenTwo[1]}}</p></center></b-col>
            <b-col col sm="3"><center><BIconShareFill font-scale="2" variant="success"></BIconShareFill> <br/><p>{{ChosenTwo[2]}}</p></center></b-col>
            
        </b-row>
    </div>
</template>

<script>
//import usingAdvantages from './usingAdvantages.vue'
import { BIconGraphUp,BIconShareFill,BIconGear} from 'bootstrap-vue'
    export default {
        name:'advantages',
        data(){
            return{
                ChosenOne:['Pourquoi choisir myquizzio ?','Pour Simplifier le processus d\'apprentidssage de vos élèves. Cela passe aussi par la digitalisation des certaines tâches don la mise en ligne des cours travaux dirigés mais surtout, la digitalisation des question des révision des cours.'],
                ChosenTwo:['Créez vos quizz en toute simplicité','Analisez les résultat des participants','Permettre à tous vos participants de participer'],
            }
        },
        components:{
           // usingAdvantages,
           BIconGraphUp,
           BIconShareFill,
           BIconGear
        },

    }
</script>

<style scoped>
.myad{
    margin-top:0px;
}

</style>