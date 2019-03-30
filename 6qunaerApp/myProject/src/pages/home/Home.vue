<template>
<!-- 只能暴露一个层级标签 -->
    <div>
        <HomeHeader></HomeHeader>
    </div>
</template>

<script>
import HomeHeader from "./components/Header"
export default {
    name:"Home" ,
    components:{
        HomeHeader
    }
}
</script>

<style scoped>

</style>
