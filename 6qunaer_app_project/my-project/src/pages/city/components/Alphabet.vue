<template>
    <ul class="list">
        <!-- <li class='item' v-for="(item, key) in alphabet_cities" 
        :key="key" 
        @click="handleLetterClick"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        > -->
        <!-- touchstart.prevent,事件修饰符，可以阻止touchstart的默认行为 -->
        <li class='item' v-for="key in letters" 
        :key="key"
        :ref="key" 
        @click="handleLetterClick"
        @touchstart.prevent="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        >
        {{key}}
        </li>
    </ul>
</template>

<script>
export default {
    name: 'CityAlphabet',
    props:{
        alphabet_cities:Object
    },
    computed: {
      letters(){
          const letters = []
          for (let i in this.alphabet_cities){
              letters.push(i)
          }
          return letters
        //   letters:["A","B","C"]
      }  
    },
    data(){
        return {
            touchStatus:false,
            // 定义startY初始值为0
            startY: 0,
            timer: null
        }
    },
    // 页面数据更新，同时完成渲染时，执行updated这个函数
    updated() {
        this.startY = this.$refs["A"][0].offsetTop
    },
    methods:{
        handleLetterClick(e){
            // 向父组件传值
            this.$emit("alphabet_to_father", e.target.innerText)
            // console.log("e", e.target.innerText)
        },
        handleTouchStart () {
            this.touchStatus = true 
        },
        // 函数节流提升handleTouchMove的性能
        handleTouchMove (e) {
            if(this.touchStatus){
                if (this.timer){
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(() => {
                                    // 1.offsetTop一个元素距离绿色底部的高度
                // :ref="key"
                // const startY = this.$refs["A"][0].offsetTop
                // A元素距离绿色底部的距离
                // console.log(startY)
                // console.log(e)
                //2.clientY任意元素距离顶部的距离
                const touchY = e.touches[0].clientY - 79
                // console.log(touchY)
                //3.
                const index = Math.floor((touchY - this.startY) / 20)
                // console.log(index)
                if (index >= 0 && index < this.letters.length){
                    this.$emit("alphabet_to_father",this.letters[index])
                    }
                },16)
            }
        },
        handleTouchEnd () {
            this.touchStatus = false
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
