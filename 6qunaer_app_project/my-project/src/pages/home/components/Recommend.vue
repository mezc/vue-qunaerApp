<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <ul>
            <!-- <router-link to="/detail"> -->
                <!-- border-bottom解决1像素边框 -->
                <router-link 
                tag="li"
                :to="'/detail/' + item.id"
                class="item border-bottom" 
                v-for="item in recommend_list" 
                :key="item.id"
                > 
                    <div>
                        <img class="item-img" :src="item.imgUrl" alt="">
                    </div>
                    <div class="item-info">
                        <p class="item-title">{{item.title}}</p>
                        <p class="item-desc ">{{item.desc}}</p>
                        <button class="item-button">查看详情</button>
                    </div>
                </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name:"HomeRecommend",
    props:{
        recommend_list:Array
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

