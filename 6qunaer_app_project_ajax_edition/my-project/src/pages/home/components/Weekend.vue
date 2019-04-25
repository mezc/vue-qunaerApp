<template>
    <div>
        <div class="recommend-title">周末去哪儿</div>
        <ul>
            <!-- border-bottom解决1像素边框 -->
            <li class="item border-bottom" v-for="item in weekend_list" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" alt="">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc ">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"HomeWeekend",
    props:{
        weekend_list:Array
    }
}
</script>

<style lang="stylus" scoped>
    @import "~styles/mixins.styl"
    .recommend-title
        line-height .8rem
        background #eee
        text-indent .2rem
    .item-img-wrapper
        width 100%
        height 0
        overflow hidden
        padding-bottom 37.09%
        .item-img
            width 100%
    .item-info
        //自动撑开宽度
        padding .1rem
        // 搭配ellipsis()，多出来的文字用...表示
        min-width 0
        .item-title
            line-height 1rem
            font-size .42rem
            ellipsis()
        .item-desc
            line-height .6rem
            color #ccc
            font-size .3rem
            ellipsis()
        
</style>

