<template>
    <div >
        <div class="recommend-title">热销推荐</div>
            <ul>
                <li class="recommend-item border-bottom" v-for="item in recommendList" :key="item.id">
                    <img :src="item.imgUrl"  class="item-img">
                    <div class="item-info">
                        <p class="item-title">{{item.title}}</p>
                        <p class="item-desc">{{item.desc}}</p>
                        <button class="item-button">查看详情</button>
                    </div>
                </li>
            </ul>
    </div>
</template>
<script>
export default {
    name:"HomeRecommend",
    data(){
        return {
                    recommendList:[
            {
                id:"0001",
                imgUrl:"http://img1.qunarzz.com/sight/p0/1902/80/80d7d3ef350b7fffa3.water.jpg_200x200_01e78b60.jpg",
                title:"东部华侨城茶溪谷东部华侨城茶溪谷东部华侨城茶溪谷东部华侨城茶溪谷东部华侨城茶溪谷",
                desc:"19540条评论"
            },
            {
                id:"0002",
                imgUrl:"http://img1.qunarzz.com/sight/p0/201405/30/258359fbfa587e26a207cee0ffe39211.jpg_200x200_26567159.jpg",
                title:"观澜山水田园旅游文化园",
                desc:"19540条评论"
            },
            {
                id:"0004",
                imgUrl:"http://img1.qunarzz.com/sight/p0/1507/64/34362835b4a219af8b36803d31a6380f.water.jpg_200x200_bc5c0452.jpg",
                title:"深圳小梅沙海洋世界",
                desc:"19540条评论"
            },
            {
                id:"0003",
                imgUrl:"http://img1.qunarzz.com/sight/p0/1507/94/fff62d6dc498d891a785284f53dd6e62.water.jpg_200x200_982a06a6.jpg",
                title:"观澜山水田园温泉",
                desc:"19540条评论"
            },
        ]

        }
    }
}
</script>
<style lang="stylus" scoped>
    @import "~styles/mixins.styl"
    .recommend-title
        line-height .8rem
        background #eee
        text-indent .4rem
        margin-top .2rem
    .recommend-item
        overflow hidden
        display flex
        height 1.9rem
        // background red
        .item-img
            width 1.7rem
            height 1.7rem
            padding .1rem  
        .item-info
            flex 1
            padding .1rem
            min-width 0
            .item-title
                line-height .54rem
                font-size .32rem
                ellipsis()
            .item-desc
                line-height .4rem
                color #ccc
                ellipsis()
            .item-button
                margin-top .2rem
                background #ff9300
                padding 0 .1rem
                border-radius .06rem
                color #fff
</style>
