<template>
  <v-list color="transparent">
    <v-list-item link> <!--v-for="n in 5" :key="n" link-->
        <v-list-item-content>
            <v-list-item-title>
                <!--List Item {{ n }}-->
                <BIconPlus font-scale="1.5" variant="primary"></BIconPlus> Nouveau quiz
            </v-list-item-title>
        </v-list-item-content>
    </v-list-item>
    <v-list-item link>
        <v-list-item-content>
            <v-list-item-title>
                
                <BIconEyeFill font-scale="1.5" variant="primary"></BIconEyeFill> Mes quiz
            </v-list-item-title>
        </v-list-item-content>
    </v-list-item>
        <v-list-item link>
        <v-list-item-content>
            <v-list-item-title>
                <BIconPersonLinesFill font-scale="1.5" variant="primary"></BIconPersonLinesFill> Participants
            </v-list-item-title>
        </v-list-item-content>
    </v-list-item>

    <v-divider class="my-2"></v-divider>

    <v-list-item link color="grey lighten-4">
        <v-list-item-content>
        <v-list-item-title>
            Refresh
        </v-list-item-title>
        </v-list-item-content>
    </v-list-item>
    </v-list>
</template>

<script>
import { BIconPlus,BIconEyeFill,BIconPersonLinesFill} from 'bootstrap-vue'
    export default {
        name:'dashboardSideBar',
        data(){
            return{

            }
        },
        components:{
            BIconPlus,
            BIconEyeFill,
            BIconPersonLinesFill,
        }
    }
</script>