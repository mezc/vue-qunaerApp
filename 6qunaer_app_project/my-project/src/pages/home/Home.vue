<template>
    <div>
        <!-- 模版里会自动把大写转换为- -->
        <home-header></home-header>
        <home-swiper :swiper_list="swiperList"></home-swiper>
        <home-icons :icon_list="iconList"></home-icons>
        <home-recommend :recommend_list="recommendList"></home-recommend>
        <home-weekend :weekend_list="weekendList"></home-weekend>

    </div>
</template>

<script> 
    import HomeHeader from "./components/Header.vue"
    import HomeSwiper from "./components/Swiper.vue"
    import HomeIcons from "./components/Icons.vue"
    import HomeRecommend from "./components/Recommend.vue"
    import HomeWeekend from "./components/Weekend.vue"
    import axios from "axios"
    import {mapState} from "vuex"


    export default {
        name:'Home',
        components:{
            HomeHeader,
            HomeSwiper,
            HomeIcons,
            HomeRecommend,
            HomeWeekend
        },
        data (){
            return {
                swiperList:[],
                iconList:[],
                recommendList:[],
                weekendList:[],
                lastCity: ""
            }
        },
        computed: {
          ...mapState(["city"])  
        },
        methods:{
            getHomeInfo(){
                axios.get('/api/index.json?city=' + this.city)
                    .then(this.getHomeInfoSucc)
            },
            getHomeInfoSucc(res){
                res = res.data
                if(res.ret && res.data){
                    const data = res.data
                    this.swiperList = data.swiperList
                    this.iconList = data.iconList
                    this.recommendList = data.recommendList
                    this.weekendList = data.weekendList
                }
                // console.log(res.data.recommendList)
            }
        },
        mounted() {
            this.lastCity = this.city
            this.getHomeInfo()
        },
        // 当页面重新被显示的时候，activated一定会重新被执行
        activated() {
            console.log("activated")
            if(this.lastCity !== this.city){
                //这种情况重新发ajax请求
                this.lastCity = this.city
                this.getHomeInfo()
            }
        },
    }
</script>

<style>

</style>

