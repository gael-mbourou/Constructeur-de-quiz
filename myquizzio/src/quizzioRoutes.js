import bodyHome from './components/bodyPage/bodyHome.vue'
import connexionPage from './components/loginPage/LoginPage.vue'
import userDashboard from './components/bodyPage/userAccount/userDashboard.vue'
import quizexemple from './components/bodyPage/userAccount/quizToAnswer/quizExemple.vue'

export default [{
        path: '/',
        component: bodyHome
    },
    { path: '/login', component: connexionPage },
    { path: '/useraccount', component: userDashboard },
    { path: '/quiz-example-to-test', component: quizexemple },
]