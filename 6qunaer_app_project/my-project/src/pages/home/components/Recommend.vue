<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <ul>
            <!-- border-bottom解决1像素边框 -->
            <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
                <div>
                    <img class="item-img" :src="item.imgUrl" alt="">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc ">{{item.desc}}</p>
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
                imgUrl:"http://img1.qunarzz.com/sight/p0/1702/9b/9b45082b3e38b2fda3.water.jpg_200x200_785628c9.jpg",
                title:"锦绣中华民俗村",
                desc:"56个民族56支花~"
            },
            {
                id:"0002",
                imgUrl:"http://img1.qunarzz.com/sight/p0/1507/64/34362835b4a219af8b36803d31a6380f.water.jpg_200x200_bc5c0452.jpg",
                title:"深圳小梅沙海洋世界",
                desc:"小梅沙"
            },
            {
                id:"0003",
                imgUrl:"http://img1.qunarzz.com/sight/p0/1502/15/15ca1d0eab6bf46c.water.jpg_200x200_50ca7bb1.jpg",
                title:"东部华侨城大侠谷",
                desc:"行走峡湾栈道，倾听大自然的天籁之音"
            }
        ]
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import "~styles/mixins.styl"
    .recommend-title
        margin-top .2rem
        line-height .8rem
        background #eee
        text-indent .2rem
    .item
        overflow hidden
        display flex
        height 2.76rem
        background green
        .item-img
            width 2.5rem
            height 2.5rem
            padding .1rem
        .item-info
            //自动撑开宽度
            flex 1
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
            .item-button
                background #ff9300
                padding 0 .1rem
                border-radius .06rem
                margin-top .2rem
                color #fff
                line-height .44rem

                


</style>

