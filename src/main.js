import '@babel/polyfill';
import 'mutationobserver-shim';
import Vue from 'vue';
import './plugins/bootstrap-vue';
//import './plugins/axios';
import './plugins/bootstrap-vue';
import './plugins/bootstrap-vue';
import './plugins/background';
import "./plugins/crypto";
import App from './App.vue';
import router from './router';

import Vuelidate from "vuelidate"
Vue.use(Vuelidate)

import axios from "axios";
import { Model } from "vue-api-query";
Model.$http = axios; 

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');