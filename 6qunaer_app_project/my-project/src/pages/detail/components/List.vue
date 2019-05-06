<template>
    <div>
        <!-- list -->
        <div
        class="item"
        v-for = "(item,index) in l_list"
        :key="index"
        >
            <div class="item-title border-bottom">
                <span class="item-title-icon"></span>
                {{item.title}}
            </div>
            <div v-if="item.children"> 
                <!-- 递归调用 -->
                <detail-list :l_list="item.children" class="item-children"></detail-list>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // 递归调用自己，<detail-list></detail-list>
    name:"DetailList",
    props:{
        l_list:Array
    }
}
</script>

<style lang="stylus" scoped>
    .item-title
        line-height .8rem
        font-size .32rem
        padding 0 .2rem
        .item-title-icon
            position relative
            display inline-block
            left .06rem
            top .06rem
            width .36rem
            height .36rem
            background url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
            margin-right .1rem
            background-size .4rem 3rem
    .item-children
        padding 0 .2rem
</style>


