export default {
    changeCity(state,city){
        state.city = city
        // 将得到的city值储存再localStorage中
        // localStorage.city = city
        try {
            localStorage.city = city
        } catch (e) {}
    }
}