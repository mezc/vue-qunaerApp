<template>
    <div class="city-list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">
                    当前城市
                </div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                </div>
            </div>

            <div class="area">
                <div class="title border-topbottom">
                    热门城市
                </div>
                <div class="button-list">
                    <div class="button-wrapper" 
                    v-for="item in city_list_hotCities" :key="item.id">
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>

            <div class="area" 
            v-for="(item, key) in city_list_cities" 
            :key="key" 
            :ref="key">
                <div class="title border-topbottom">
                    {{key}}
                </div>
                <div class="item-list">
                    <!-- border-bottom 下边线 -->
                    <div class="item border-bottom" v-for="innerItem in item" :key="innerItem.id">{{innerItem.name}}</div>
                </div>
            </div>
        </div>
    </div>
    
</template>
<script>
import BScroll from 'better-scroll'
export default {
    name: "CityList",
    props:{
        city_list_hotCities:Array,
        city_list_cities:Object,
        city_list_letter:String
        
    },
    mounted() {
        // console.log(this.$refs.city-list-wrapper)
        // ref="wrapper" -> this.$refs.wrapper
        //:ref="key" -> this.$refs[this.city_list_letter][0]
        this.scroll = new BScroll(this.$refs.wrapper)
    },
    // 监听器，监听city_list_letter,一旦点击字母发生变化就会执行函数里的代码
    //better-scroll：this.scroll.scrollToElement自动滚动到
    watch:{
        city_list_letter (){
            // console.log("watch_city_list_letter", this.city_list_letter)
            // ref="wrapper" -> this.$refs.wrapper
            //:ref="key" -> this.$refs[this.city_list_letter][0]
            //[0]转为dom元素
            if (this.city_list_letter){
                const element = this.$refs[this.city_list_letter][0]
                // console.log("element", element)
                this.scroll.scrollToElement(element)
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
    .border-topbottom
        &:before
            border-color #ccc
        &:after
            border-color:#ccc
    .border-bottom
        // 下底线
        &:before
            border-color:#ccc
    .city-list
        // overflow hidden,position absolute会导致列表区域不能拖动
        overflow hidden
        position absolute
        top 1.58rem
        left 0
        right 0
        bottom 0
        // background-color red
        .title
            line-height .54rem
            background #eee
            padding-left .2rem
            color #666
            font-size .26rem
        .button-list
            padding .1rem .6rem .1rem .1rem
            overflow hidden
            .button-wrapper
                float left 
                width 33.33%
                .button
                    margin .1rem
                    padding .1rem 0
                    text-align center
                    border .02rem solid #ccc
                    border-radius .06rem
        .item-list
            .item
                line-height .76rem
                color #666
                padding-left .2rem
</style>
