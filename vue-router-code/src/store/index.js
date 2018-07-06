import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import cart from './modules/cart'
Vue.use(Vuex)
// Vuex管理着vue大型项目中的数据流，小型项目不要用vuex
// vue项目分为两部分，（vue vueRouter:界面构建组件）/（vue数据流）
export default new Vuex.Store({
    // Store里的一间库房 ：modules
    modules:{
        products,
        cart
    }
})