import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import state from './state.js'

// 告诉 vue “使用” vuex
Vue.use(Vuex)

// 整合初始状态和变更函数,得到store
export default new Vuex.Store({
  	state,
  	mutations
})