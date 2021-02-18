import Vue from 'vue';
import VueRouter from 'vue-router';

import LoginView from '../views/LoginView'
import RepositoriesView from '../views/RepositoriesView'

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/login',
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView
        },
        {
            path: '/:userId/repositories',
            name: 'repositories',
            component: RepositoriesView
        },
    ]
})