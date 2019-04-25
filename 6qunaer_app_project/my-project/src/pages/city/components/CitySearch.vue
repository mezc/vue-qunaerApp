<template>
    <div>
        <div class='search'>
            <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
        </div>
        <div class="search-content" ref="searchContent"
        v-show="keyword"
        >
            <ul> 
                <li class="search-item border-bottom"
                v-for="item in search_list"
                :key="item.id"
                >{{item.name}}
                </li>
                <li class="search-item border-bottom" v-show=" hasNoData">
                    没有找到匹配数据
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
    name:"CitySearch",
    props:{
        search_cities:Object
    },
    data () {
        return {
            keyword: "",
            search_list: [],
            timer:null
        }
    },
    computed:{
        hasNoData(){
            return !this.search_list.length
        }
    },
    watch: {
        keyword (){
            //节流函数
            if (this.timer){
                clearTimeout(this.timer)
            }
            if (!this.keyword){
                this.search_list = []
                return
            }
            this.timer = setTimeout(() => {
                const result = []
                for (let i in this.search_cities){
                    this.search_cities[i].forEach((value) => {
                        if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1){
                            result.push(value)
                        }
                    })
                }
                this.search_list = result
            },100)
        }
    },
    mounted() {
        this.scroll = new BScroll(this.$refs.searchContent)
    },
}
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.styl"
    .search
        height .72rem
        padding 0 .2rem
        background $bgColor
        .search-input
            width 100%
            // height .62rem
            line-height .62rem
            text-align center
            padding 0 .1rem
            border-radius .06rem
            box-sizing border-box
            color #666
    .search-content
        z-index 1
        overflow hidden
        position absolute
        top 1.58rem
        left 0
        right 0
        bottom 0
        background #eee
        .search-item
            line-height .62rem
            padding-left .2rem
            color #666
            background #fff
</style>
