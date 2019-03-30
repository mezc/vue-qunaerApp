<template>
    <div class="swiper">
        <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="item in swiperList" :key="item.id">
            <img class="swiper-img" :src="item.imgUrl" />
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
            swiperOption:{
                pagination:".swiper-pagination",
                // 意思是让组件支持循环轮播，这样左右都能有轮播图
                loop:true
            },
            swiperList:[
                {
                    id:"0001",
                    imgUrl:"https://img1.qunarzz.com/qs/1903/ef/f0ec348a8a7c5b02.jpg"
                },
                {
                    id:"0002",
                    imgUrl:"https://img1.qunarzz.com/qs/1902/ef/fd0268cb94670f02.jpg"
                }
            ]
        }
    }
}
</script>
<style lang="stylus" scoped>
// 为了不被scoped限制，使用>>>穿透

.swiper >>> .swiper-pagination-bullet-active
    background :#fff !important
    
.swiper
    width:100%
    height :0
    padding-bottom :55%
    overflow hidden
    .swiper-img
        width: 100%
</style>
// 意思是，高度会相对宽度自动撑开50%