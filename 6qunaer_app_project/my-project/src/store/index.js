import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
export default new Vuex.Store({
    // state存放全局共用的数据
    state:{
        city:"上海"
    },
    actions:{
        changeCity(ctx, city){
            // console.log(city)
            //用commit传递给mutations
            ctx.commit("changeCity", city)
        }
    },
    mutations:{
        changeCity(state,city){
            state.city = city
        }
    }
})