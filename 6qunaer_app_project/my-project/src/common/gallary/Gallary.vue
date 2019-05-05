<template>
    <div class="container" @click="handleGallaryClick">
        <div class="wrapper">
            <swiper :options="swiperOptions">
                <swiper-slide v-for="(item, index) in gallaryImgs" :key="index">
                    <img class="gallary-img" :src="item" />
                </swiper-slide>
                <!-- 分页 -->
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    name: "CommonGallary",
    props:{
        gallaryImgs:{
            type:Array,
            default (){
                return []
            }
        }
    },
    data(){
        return {
            swiperOptions:{
                pagination:".swiper-pagination",
                paginationType:"fraction",
                //swiper插件，只要监听到父级元素或者这个元素发生dom结构变化，会自动刷新，解决宽度计算问题
                observeParents:true,
                observer:true
            }
        }
    },
    methods:{
        handleGallaryClick(){
            this.$emit("close")
        }
    }
}
</script>

<style lang="stylus" scoped>
    .container >>> .swiper-container
        overflow inherit
    .container
        display flex
        flex-direction column
        justify-content center
        z-index 99
        position fixed
        left 0
        right 0
        top 0
        bottom 0
        background #ccc
        .wrapper
            // background #fff
            // overflow hidden
            height 0
            width 100%
            padding-bottom 100%
            .gallary-img
                width 100%
                // height 0
                // padding-bottom 100%
            .swiper-pagination
                color #fff
                bottom -1rem

</style>
