import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import quizzioRoutes from './quizzioRoutes'



Vue.use(VueRouter)
    // Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
    // Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

const myrouter = new VueRouter({
    mode: 'history',
    routes: quizzioRoutes,

})


new Vue({
    vuetify,
    render: h => h(App),
    router: myrouter
}).$mount('#app')