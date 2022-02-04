import '@babel/polyfill';
import 'mutationobserver-shim';
import Vue from 'vue';
import './plugins/bootstrap-vue';
import './plugins/background';
import "./plugins/crypto";
import App from './App.vue';
import router from './router';
import store from '@/store'

/* import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin) */

import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);


import Vuelidate from "vuelidate"
Vue.use(Vuelidate)

import axios from "axios";
import { Model } from "vue-api-query";
Model.$http = axios; 

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    
    render: h => h(App)
}).$mount('#app');