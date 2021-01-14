import Vue from 'vue'
import VueRouter from 'vue-router'
import RepositoriesView from '../views/RepositoriesView.vue'
import LoginView from '../views/LoginView.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode : 'history',
    routes : [
        {
            path : '/',
            redirect : '/login'
        },
        {
            path: '/repositories',
            component : RepositoriesView,
        },
        {
            path: '/login',
            component: LoginView
        }
    ]
})
