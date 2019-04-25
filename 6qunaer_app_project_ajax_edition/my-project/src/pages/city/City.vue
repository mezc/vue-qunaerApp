<template>
    <!-- <div>city</div> -->
    <div>
        <city-header></city-header>
        <city-search :search_cities="cities"></city-search>
        <city-list :city_list_cities="cities" :city_list_hotCities="hotCities"
        :city_list_letter="letter"></city-list>
        <!-- 监听子组件alphabet.vue传递的事件 -->
        <city-alphabet :alphabet_cities="cities"
        @alphabet_to_father="handleLetterChange"
        ></city-alphabet>
    </div>
    
</template>

<script>
import CityHeader from "./components/CityHeader.vue"
import CitySearch from "./components/CitySearch.vue"
import CityList from "./components/CityList.vue"
import CityAlphabet from "./components/Alphabet.vue"
import axios from "axios"

export default {
    name:"City",
    components:{
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    data(){
        return {
            cities:{},
            hotCities:[],
            letter:""
        }
    }, 
    methods:{
        getCityInfo(){
           axios.get("/api/city.json")
            .then(this.handleGetCityInfoSucc) 
        },
        handleGetCityInfoSucc(res){
            console.log(res)
            res = res.data
            if (res.ret && res.data){
                const data = res.data
                this.cities = data.cities
                this.hotCities = data.hotCities
            }
        },
        handleLetterChange(letter){
            this.letter = letter
            // console.log("letter", letter)
        }
    },
    mounted() {
        this.getCityInfo()
    },
}
</script>

<style lang="stylus" scoped>
    
</style>
