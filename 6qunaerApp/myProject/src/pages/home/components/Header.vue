<template>
<!-- 只能暴露一个层级标签 -->
    <div class="header">
        <div class="header-left"><span class="iconfont back-icon">&#xe624;</span></div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题</div>
        <div class="header-right">城市
            <span class="iconfont arrow-icon">&#xe6aa;</span>
        </div>
    </div>
</template>

<script>
export default {
    name:"HomeHeader" 
}
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"
.header
    display :flex
    background-color: $bgColor
    line-height: .86rem;
    color:#fff
    .header-left
        width: .64rem
        float:left
        .back-icon
            text-align:center
            font-size:.4rem
    .header-input
        flex:1
        padding-left :.2rem
        margin-top :.12rem
        margin-left:.2rem
        height :.64rem
        line-height :.64rem
        background :#fff
        border-radius:.1rem
        color :#ccc
    .header-right
        width:1.24rem
        float :right
        text-align :center
        .arrow-icon
            font-size:.2rem
            margin-left: -.04rem
</style>
