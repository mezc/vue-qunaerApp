<template>
    <ul class="list">
        <li class='item' v-for="(item, key) in alphabet_cities" :key="key" @click="handleLetterClick">{{key}}</li>
    </ul>
</template>

<script>
export default {
    name: 'CityAlphabet',
    props:{
        alphabet_cities:Object
    },
    methods:{
        handleLetterClick(e){
            // 向父组件传值
            this.$emit("alphabet_to_father", e.target.innerText)
            // console.log("e", e.target.innerText)
        }
    }
    
}
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.styl"
    .list
        position absolute
        top 1.58rem
        right 0
        bottom 0
        width .4rem
        // background red
        display flex
        flex-direction column
        justify-content center
        .item
            line-height .4rem
            text-align center 
            color $bgColor
</style>
