<template>
    <div >
        <div class="recommend-title">周末去哪儿</div>
            <ul>
                <li class="recommend-item border-bottom" v-for="item in weekend" :key="item.id">
                    <div id="item-img-wrapper">
                        <img :src="item.imgUrl"  class="item-img">
                    </div>
                    <div class="item-info">
                        <p class="item-title">{{item.title}}</p>
                        <p class="item-desc">{{item.desc}}</p>
                    </div>
                </li>
            </ul>
    </div>
</template>
<script>
export default {
    name:"HomeWeekend",
    props:{
        weekend: Array
    }
}
</script>
<style lang="stylus" scoped>
    @import "~styles/mixins.styl"
    .recommend-title
        line-height .8rem
        background #eee
        text-indent .4rem
    .item-img-wrapper
        overflow hidden
        height 0
        padding-bottom 37.09%
    .item-img
        width 100% 
    .item-info
        flex 1
        padding .1rem
        min-width 0
        .item-title
            line-height .56rem
            font-size .32rem
            ellipsis()
        .item-desc
            line-height .4rem
            color #ccc
            ellipsis()
        
</style>
