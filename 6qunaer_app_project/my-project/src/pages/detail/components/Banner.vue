<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" :src="banner_bannerImg" />
            <div class="banner-info">
                <div class="banner-title">{{this.banner_sightName}}</div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xeb9a;</span>
                    {{this.banner_gallaryImgs.length}}
                </div>
            </div>
        </div>
        <common-gallary 
        :gallaryImgs="banner_gallaryImgs" 
        v-show="showGallary"
        @close="handleGallaryClose"
        ></common-gallary>
    </div>
</template>

<script>
import CommonGallary from "common/gallary/Gallary.vue"
export default {
    name:"DetailBanner",
    props:{
        banner_sightName: String,
        banner_bannerImg:String,
        banner_gallaryImgs:Array
    },
    methods:{
        handleBannerClick(){
            this.showGallary = true
        },
        handleGallaryClose(){
            this.showGallary = false
        }
    },
    data(){
        return {
            showGallary:false,
        }
    },
    components:{
        CommonGallary
    }
}
</script>

<style lang="stylus" scoped>
    .banner
        position relative
        overflow hidden
        height 0
        padding-bottom 55%
        .banner-img
            width 100%
        .banner-info
            position absolute 
            left 0
            right 0
            bottom 0
            display flex
            line-height .6rem
            color #fff
            //渐变色
            background-image linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0, .8))
            .banner-title
                flex 1
                font-size .32rem
                padding 0 .2rem
            .banner-number
                margin-top .14rem
                padding 0 .4rem
                height .4rem
                line-height .32rem
                border-radius .2rem
                // 透明度
                background rgba(0, 0, 0, .8)
                font-size .24rem 
                .banner-icon
                    font-size .24rem
</style>

