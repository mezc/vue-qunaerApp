<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(pageItem, index) in pages" :key="index">
                <div class="icon" v-for="item in pageItem" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>

</template>
<script>
export default {
    name:"HomeIcons",
    props:{
        icons: Array
    },
    data (){
        return {
            swiperOption:{
                autoplay: false,
                // loop:true
            }
        }
    },
    computed:{
            pages (){
                const pages = []
                this.icons.forEach((item, index)=>{
                    const page = Math.floor(index / 8)
                    if(!pages[page]){
                        pages[page] = []
                    }
                    pages[page].push(item)
                })
                return pages
            }
        }
}
</script>
<style lang="stylus" scoped>
@import "~styles/varibles.styl"
@import "~styles/mixins.styl"

.icons >>> .swiper-container
    overflow hidden
    height 0
    padding-bottom 50%
    // background green    
.icon
    position relative
    overflow hidden
    float left 
    width 25%
    padding-bottom 25%
    height 0
    // background red
    height 0
    .icon-img
        position absolute
        top 0
        left 0
        right 0
        bottom .4rem
        box-sizing border-box
        padding .1rem
        // background blue
        .icon-img-content
            height 100%
            display block
            margin 0 auto
    .icon-desc
        position absolute 
        left 0
        right 0
        bottom 0
        height .44rem
        line-height .44rem
        text-align center
        color $darkTextColor
        ellipsis()

</style>
