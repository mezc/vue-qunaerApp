<template>
    <div >
        <div class="recommend-title">周末去哪儿</div>
            <ul>
                <li class="recommend-item border-bottom" v-for="item in recommendList" :key="item.id">
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
    data(){
        return {
                    recommendList:[
            {
                id:"0001",
                imgUrl:"http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg",
                title:"东部华侨城茶溪谷东部华侨城茶溪谷东部华侨城茶溪谷东部华侨城茶溪谷东部华侨城茶溪谷",
                desc:"19540条评论"
            },
            {
                id:"0002",
                imgUrl:"http://img1.qunarzz.com/sight/source/1811/b8/5d599bbdcf8b57.jpg_r_640x214_2ee055e3.jpg",
                title:"观澜山水田园旅游文化园",
                desc:"19540条评论"
            },
            {
                id:"0004",
                imgUrl:"http://img1.qunarzz.com/sight/source/1505/fa/ca65fde9677de2.jpg_r_640x214_4500e3ff.jpg",
                title:"深圳小梅沙海洋世界",
                desc:"19540条评论"
            },
            {
                id:"0003",
                imgUrl:"http://img1.qunarzz.com/sight/source/1811/f8/29dfa785277839.jpg_r_640x214_7d051523.jpg",
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
    .item-img-wrapper
        overflow hidden
        height 0
        padding-bottom 30%
    .item-img
        width 100% 
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
        
</style>
