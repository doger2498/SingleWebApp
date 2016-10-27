import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import routerConfig from './router.js'
import BarItem from './components/BarItem.vue'
import Bar from './components/Bar.vue'
import store from './vuex/store.js'
import VueResource from 'vue-resource'
import BackGround from './components/BackGround.vue'

// vue-router
Vue.use(VueRouter);
Vue.config.debug = true;
var router = new VueRouter()
routerConfig(router);


// vue-resource
Vue.use(VueResource);

var app = Vue.extend({})

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
        app,
        BackGround
    },

    methods: {

    },

    store: store

}, "#app");

window.router = router

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
