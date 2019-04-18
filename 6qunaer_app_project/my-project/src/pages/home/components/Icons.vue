<template>
    <div class="icons">
        <swiper>
            <swiper-slide v-for="(page, index) in pages" :key="index">
                <div class="icon" v-for="item in page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" />
                    </div>
                    <p class="icon-desc">{{item.imgText}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    name: "HomeIcons",
    data(){
        return {
            iconList:[
                {
                   id:"0001",
                   imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
                   imgText:"景点门票景点门票景点门票景点门票景点门票" 
                },
                {
                    id:"0002",
                    imgUrl:"http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
                    imgText:"一日游一日游一日游一日游"
                },
                {
                    id:"0003",
                    imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
                    imgText:"动植物园"
                },
                {
                    id:"0004",
                    imgUrl:"http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
                    imgText:"深圳必游"
                },
                {
                    id:"0005",
                    imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png",
                    imgText:"海洋游"
                },
                {
                    id:"0006",
                    imgUrl:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/cba147cf6cfcea7109d0bff6aac6f626.png",
                    imgText:"深圳动物园"
                },
                {
                    id:"0007",
                    imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/a6/6d97515091789602.png",
                    imgText:"世界之窗"
                },
                {
                    id:"0008",
                    imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/e7/d108f17143b40f02.png",
                    imgText:"4月优惠"
                },
                {
                    id:"0009",
                    imgUrl:"http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
                    imgText:"一日游"
                }
            ]
        }
    },
    computed:{
        pages (){
            const pages = []
            this.iconList.forEach((item, index) => {
                const page = Math.floor(index / 8)
                if (!pages[page]){
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.icons >>> .swiper-container
    overflow hidden
    width 100%
    height 0
    padding-bottom 50%
    // background green 
.icons
    margin-top .2rem
    .icon
        position relative
        float left 
        width 25%
        padding-bottom 25%
        // background red
        overflow hidden
        height 0
        .icon-img
            position absolute
            top 0
            left 0
            right 0
            bottom .44rem
            // background blue
            box-sizing border-box
            padding .1rem
            .icon-img-content
                height 100%
                // 自动居中
                display block
                margin 0 auto 
        .icon-desc
            position absolute
            left 0
            right 0
            bottom 0
            height .44rem
            line-height .44rem
            color:$darkTextColor
            text-align center
            // 长文字使用...表示,创建mixins.styl
            ellipsis()

</style>
