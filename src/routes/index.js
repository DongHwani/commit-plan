import Vue from 'vue';
import VueRouter from 'vue-router';

import LoginView from '../views/LoginView'
import CardListView from '../views/CardListView'

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
            component: LoginView
        },
        {
            path: '/repositories',
            component: CardListView
        }
    ]
})