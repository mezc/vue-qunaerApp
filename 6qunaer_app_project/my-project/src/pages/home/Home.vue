<template>
    <div>
        <!-- 模版里会自动把大写转换为- -->
        <home-header></home-header>
    </div>
</template>

<script> 
import HomeHeader from "./components/Header.vue"
export default {
    name:'Home',
    components:{
        HomeHeader
    }
}
</script>

<style>

</style>

