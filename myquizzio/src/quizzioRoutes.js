import bodyHome from './components/bodyPage/bodyHome.vue'
import connexionPage from './components/loginPage/LoginPage.vue'
//import registerginform from './components/loginPage/register.vue'
export default [{
        path: '/',
        component: bodyHome
    },
    { path: '/login', component: connexionPage },
    //{ path: '/register', component: registerginform },
]