<template>
    <div>
        <!-- 模版里会自动把大写转换为- -->
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
    </div>
</template>

<script> 
import HomeHeader from "./components/Header.vue"
import HomeSwiper from "./components/Swiper.vue"
import HomeIcons from "./components/Icons.vue"


export default {
    name:'Home',
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons
    }
}
</script>

<style>

</style>

