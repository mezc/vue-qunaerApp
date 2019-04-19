<template>
    <!-- <div>city</div> -->
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list></city-list>
    </div>
    
</template>

<script>
import CityHeader from "./components/CityHeader.vue"
import CitySearch from "./components/CitySearch.vue"
import CityList from "./components/CityList.vue"


export default {
    name:"City",
    components:{
        CityHeader,
        CitySearch,
        CityList
    }
}
</script>

<style lang="stylus" scoped>
    
</style>
