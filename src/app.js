import Vue from 'vue';
import VueRouter from 'vue-router';
import routerConfig from './router.js'

import BarItem from './components/BarItem.vue'
import Bar from './components/Bar.vue'

Vue.use(VueRouter);
Vue.config.debug = true;

var app = Vue.extend({});

var router = new VueRouter();

routerConfig(router);

router.start({
    data() {
        return {
          isWelcome: true
        }
    },
    ready: function() {

    },
    components: {
        BarItem,
        Bar,
        app
    },
    methods: {

    }
}, "#app");

router.beforeEach(({to, from, next}) => {
    
    console.log(to.path);
    if(to.path === '/') {
        router.app.isWelcome = false
    }else{
        router.app.isWelcome = true
    }
    next()
});

router.afterEach(function ({to}) {
    console.log(`成功浏览到: ${to.path}`)
    $.refreshScroller()
})
