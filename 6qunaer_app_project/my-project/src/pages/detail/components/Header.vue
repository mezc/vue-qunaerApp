<template>
    <div>
        <!-- <div>header</div> -->
        <router-link 
        tag="div" 
        to="/" 
        class="header-abs"
        v-show="showAbs"
        >
            <span class="iconfont header-back-icon" >&#xe624;</span>
        </router-link>
        <div 
        class="header-fixed" 
        v-show="!showAbs"
        :style="opacityStyle">
            <router-link to="/">
                <span class="iconfont header-fixed-icon" >&#xe624;</span>
            </router-link>
            景点详情
        </div>
    </div>
</template>

<script>
export default {
    name:"DetailHeader",
    data(){
        return {
            showAbs:true,
            opacityStyle:{
                opacity:0
            }
        }
    },
    methods: {
        handleScroll(){
            console.log("scroll")
            const top = document.documentElement.scrollTop
            if (top > 60){
                let opacity = top / 140
                opacity = opacity > 1 ? 1 : opacity
                this.opacityStyle = {
                    opacity
                }
                this.showAbs = false
            }else {
                this.showAbs = true
            }
            // console.log(document.documentElement.scrollTop)
        }
    },
    activated() {
        // 绑定到了window全局变量，没有绑定到组件中
        window.addEventListener("scroll", this.handleScroll)
    },
    //使用了keep-alive后，会产生两个钩子函数：activated和deactivated,页面即将被隐藏或页面即将被替换成新页面时
    //对全局事件解绑
    deactivated() {
        window.removeEventListener("scroll", this.handleScroll)
    },
}
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.styl"
    .header-abs
        position absolute 
        left .2rem
        top .2rem
        width .8rem
        height .8rem
        border-radius: .4rem
        text-align center
        line-height .8rem
        background rgba(0,0,0,.8)
        .header-back-icon
            color:#fff
            font-size:.4rem
    .header-fixed
        position fixed
        // overflow hidden
        top 0
        left 0
        right 0
        height .86rem
        line-height .86rem
        text-align center
        color #fff
        background-color $bgColor
        .header-fixed-icon
            position absolute
            width .64rem
            text-align center
            font-size .4rem
            left 0
            top 0
            color #fff
</style>
