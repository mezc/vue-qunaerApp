<template>
<!-- 只能暴露一个层级标签 -->
    <div>
        <HomeHeader :city="city"></HomeHeader>
        <!-- <home-swiper></home-swiper> -->
        <HomeSwiper :sList = "swiperList"></HomeSwiper>
        <home-icons :icons = "iconList"></home-icons>
        <home-recommend :recommend="recommendList"></home-recommend>
        <home-weekend :weekend="weekendList"></home-weekend>
    </div>
</template>

<script>
import HomeHeader from "./components/Header"
import HomeSwiper from "./components/Swiper.vue"
import HomeIcons from "./components/Icons.vue"
import HomeRecommend from "./components/Recommend.vue"
import HomeWeekend from "./components/Weekend.vue"
import axios from "axios"

export default {
    name:"Home" ,
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    },
    data (){
        return {
            city:"",
            swiperList:[],
            iconList:[],
            recommendList:[],
            weekendList:[]
        }
    },
    methods:{
        getHomeInfo (){
            axios.get("/api/index.json")
            .then(this.getHomeInfoSuccess)
        },
        getHomeInfoSuccess (res){
            res = res.data
            if (res.ret && res.data) {
                this.city = res.data.city
                this.swiperList = res.data.swiperList
                this.iconList = res.data.iconList
                this.recommendList = res.data.recommendList
                this.weekendList = res.data.weekendList
            }
            console.log("im res.data:",res.data)
        }
    },
    mounted (){
        this.getHomeInfo()
    }
}
</script>

<style scoped>

</style>
