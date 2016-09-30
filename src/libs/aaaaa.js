import Vue from 'vue';
import VueRouter from 'vue-router';
import routerConfig from './router.js'

Vue.use(VueRouter);
Vue.config.debug = true;

var app = Vue.extend({});

var router = new VueRouter();

routerConfig(router);

router.start({component: app}, "#app");
