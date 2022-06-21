import '@babel/polyfill';
import 'mutationobserver-shim';
import Vue from 'vue';
import './plugins/bootstrap-vue';
import './plugins/background';
import "./plugins/crypto";
import App from './App.vue';
import router from './router';
//import store from '@/store'
import store from './store';
import axios from 'axios';

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'https://musikada-user-heroku.herokuapp.com/';

import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);


import Vuelidate from "vuelidate"
Vue.use(Vuelidate)

//import axios from "axios";
//import { Model } from "vue-api-query";
//Model.$http = axios; 

Vue.config.productionTip = false;


//Vue.$cookies.config(expireTimes[,path[, domain[, secure[, sameSite]]]])  // default: expireTimes = 1d, path = '/', domain = '', secure = '', sameSite = 'Lax'

new Vue({
    router,
    store,
    
    render: h => h(App)
}).$mount('#app');