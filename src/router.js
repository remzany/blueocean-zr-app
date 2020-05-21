import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import Posts from './views/Posts.vue';
import Users from './views/Users.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/users',
            component: Users
        },
        {
            path: '/posts',
            component: Posts
        }
    ]
})