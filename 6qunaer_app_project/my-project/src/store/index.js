import Vue from "vue"
import Vuex from "vuex"
import state from "./state"
import mutations from "./mutations.js"
Vue.use(Vuex)

export default new Vuex.Store({
    // state存放全局共用的数据
    state:state,
    actions:{
        changeCity(ctx, city){
            // console.log(city)
            //用commit传递给mutations
            ctx.commit("changeCity", city)
        }
    },
    mutations:mutations
})