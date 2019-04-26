<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont back-icon" >&#xe624;</span>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题</div>
        <router-link to="/city">
             <!-- <div class="header-right">{{ this.header_city}}
                <span class="iconfont arrow-icon">&#xe6aa;</span>
            </div> -->
            <div class="header-right">{{ this.city }}
                <span class="iconfont arrow-icon">&#xe6aa;</span>
            </div>
        </router-link>
       
    </div>
</template>

<script> 
import {mapState} from "vuex"
export default {
    name:'HomeHeader',
    computed:{
        // mapState指将vuex的数据映射到computed属性里
        //将city这个共用数据映射到名字叫city的计算属性中
        // ...展开运算符
        //之后就可将this.$store.state.city改为this.city
        ...mapState(['city'])
    },
    props:{
        header_city:String
    }
}
</script>

<style lang="stylus" scoped>
// 样式里引入样式要在import前加@
//在css中使用@，要在前加入～
//在webpack.base.conf.js中alias,配置styles代表路径src/assets/styles,重新运行npm run dev
    // @import '~styles/varibles.styl'
    @import '~@/assets/styles/varibles.styl'
    .header
        display:flex
        // line-height 行间距
        line-height: .86rem
        background-color $bgColor
        color #fff
        .header-left
            width: .64rem
            float: left 
            .back-icon
                text-align center
                font-size .4rem
                margin-left .1rem
        .header-input
            flex: 1
            background #fff
            border-radius .1rem
            margin-top .12rem
            line-height .64rem
            margin-left .2rem
            color #ccc
            height .64rem
            padding-left .2rem
        .header-right
            min-width: 1.04rem
            padding 0 .1rem
            float: right
            text-align center
            color #fff
            .arrow-icon
                font-size .24rem
                margin-left -.04rem
            

</style>


