<template>
    <div class="header">
        城市选择
        <router-link to="/">
            <span class="iconfont back-icon" >&#xe624;</span>
        </router-link>
    </div>
</template>

<script>
export default {
    name:'CityHeader'
}
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.styl"
    .header
        position relative
        overflow hidden
        height .86rem
        line-height .86rem
        text-align center
        color #fff
        background-color $bgColor
        .back-icon
            position absolute
            width .64rem
            text-align center
            font-size .4rem
            left 0
            top 0
            color #fff
            


</style>

