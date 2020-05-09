import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import * as  getters from './getters'

//1.安装插件
Vue.use(Vuex);

//2.创建store对象
const state={
    carList:[]
}
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
})

//3.挂载vue实例上
export default store