<template>
    <div class="wrapper">
        <!-- 空数组时swiper为被创建 -->
        <!-- <swiper :options="swiperOption" v-if="swiper_list.length"> 避免在模版中有逻辑计算，使用computed计算属性-->
        <swiper :options="swiperOption" v-if="showSwiper">
        <!-- slides -->
        <swiper-slide v-for = "item in swiper_list" :key="item.id">
            <img class="swipe-img" :src="item.imgUrl" alt="" />
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
    
</template>
<script>
export default {
    name:"HomeSwiper",
    props:{
        swiper_list:Array
    },
    data(){
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true
            }
        }
    },
    computed: {
        showSwiper (){
            return this.swiper_list.length
        }
    },
}
</script>

<style lang="stylus" scoped>
    //意思是穿透wrapper,只要含swiper-pagination-bullet-active的都改变，不然在scoped中，只对当前div有效，而swiper-pagination-bullet-active是通过swiper渲染的
    .wrapper >>> .swiper-pagination-bullet-active
        background #fff !important 
    .wrapper
    // 宽度是100%，高度会相对宽度撑开26.67%，长375，宽100
        height 0
        width 100%
        overflow hidden
        padding-bottom 29%
        .swipe-img
            width 100%
            

</style>
