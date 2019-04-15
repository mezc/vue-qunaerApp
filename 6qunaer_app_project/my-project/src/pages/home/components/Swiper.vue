<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for = "item in swiperList" :key="item.id">
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
    data(){
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true
            },
            swiperList:[
                {
                    id:"0001",
                    imgUrl:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/87a224d0349d94a11e97f31aa1aba4f5.jpg_750x200_1f78af87.jpg"
                },
                {
                    id:"0002",
                    imgUrl:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/b23a39921e8b78f38b61412d691d93ea.jpg_750x200_942ed7bd.jpg"
                }
            ]
        }
    }
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
        padding-bottom 26.67%
        .swipe-img
            width 100%
            

</style>
