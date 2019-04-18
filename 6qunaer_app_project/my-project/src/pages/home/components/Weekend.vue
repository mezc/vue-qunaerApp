<template>
    <div>
        <div class="recommend-title">周末去哪儿</div>
        <ul>
            <!-- border-bottom解决1像素边框 -->
            <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
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
    data(){
        return {
            recommendList:[
            {
                id:"0001",
                imgUrl:"http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg",
                title:"清远周边逛",
                desc:"人人都有一双发现美的眼睛，身边的事物最熟悉不过，那你可曾发现了被人遗漏的美？"
            },
            {
                id:"0002",
                imgUrl:"http://img1.qunarzz.com/sight/source/1811/b8/5d599bbdcf8b57.jpg_r_640x214_2ee055e3.jpg",
                title:"浮在海上的绿洲",
                desc:"南国滨海之城，避寒胜地，有暖暖的阳光，海风习习，吃着海鲜逛逛老街多惬意啊"
            },
            {
                id:"0003",
                imgUrl:"http://img1.qunarzz.com/sight/source/1602/88/bf120edeaea383.jpg_r_640x214_f8591f7b.jpg",
                title:"欢乐长隆",
                desc:"世界欢乐汇聚长隆，这里拥有多个大型游乐设备和精彩的演出，和小伙伴们一起感受刺激的体验"
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
    .item-img-wrapper
        width 100%
        height 0
        overflow hidden
        padding-bottom 35%
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

