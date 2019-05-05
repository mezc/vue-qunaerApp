<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1508/2e/d9363ce50a88c8c5ff5a138c67687cd4.water.jpg_600x330_28bda6b0.jpg" />
            <div class="banner-info">
                <div class="banner-title">深圳野生动物园(AAAA景区)</div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xeb9a;</span>
                    22
                </div>
            </div>
        </div>
        <common-gallary 
        :gallaryImgs="imgs" 
        v-show="showGallary"
        @close="handleGallaryClose"
        ></common-gallary>
    </div>
</template>

<script>
import CommonGallary from "common/gallary/Gallary.vue"
export default {
    name:"DetailBanner",
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
            imgs:[
                "http://img1.qunarzz.com/sight/p0/1508/44/c8fb5daa16f5f99f8201f323426b3516.water.jpg_350x240_9b0f85ae.jpg",
                "http://img1.qunarzz.com/sight/p0/1508/1f/4b7af1ff858a1706ce9f55f5df0c45b2.water.jpg_350x240_804bc10e.jpg"
            ]
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

