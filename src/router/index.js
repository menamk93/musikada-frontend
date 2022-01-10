import Vue from 'vue';
import VueRouter from 'vue-router';



Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () =>
            import ('../views/Home.vue')
    },
    {
        path: '/singers',
        name: 'SingerView',
        component: () => import ('../views/SingerView.vue')
    },
    {
        path: '/ciphers',
        name: 'CiphersView',
        component: () => import ('../views/CiphersView.vue')
    },
    {
        path: '/events',
        name: 'EventsView',
        component: () => import ('../views/EventsView.vue')
    },
    {
        path: '/about',
        name: "AboutUsView",
        component: () => import ('../views/AboutUsView.vue')
    },
    {
        path: '/login',
        name: "Login",
        component: () => import ('../views/Login.vue')
    },
    {
        path: '/modal',
        name: "Modal",
        component: () => import ('../views/Modal')
    },
    {
        path: '/eventoexpandido',
        name: "EventoExpandido",
        component: () => import ('../views/EventoExpandido.vue')
    },
    
]
const router = new VueRouter({
    mode: 'history',
    /* base: process.env.BASE_URL, */
    routes
});

export default router;