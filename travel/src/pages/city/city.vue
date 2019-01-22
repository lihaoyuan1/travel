<template>
  <div>
    <city-header></city-header>
    <search></search>
    <list :cities="cities" :hot="hotCities"></list>
    <alphabet :cities="cities"></alphabet>
  </div>
</template>

<script>
import CityHeader from './components/header/header'
import Search from './components/search/search'
import List from './components/list/list'
import Alphabet from './components/alphabet/alphabet'
import axios from 'axios'
export default {
  name: 'city',
  components: {
    CityHeader,
    Search,
    List,
    Alphabet
  },
  data () {
    return {
      cities: {},
      hotCities: []
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json').then(response => {
        response = response.data
        if (response.ret && response.data) {
          const data = response.data
          this.cities = data.cities
          this.hotCities = data.hotCities
        }
      })
    }
  },
  created () {
    this.getCityInfo()
  }
}
</script>

<style scoped>
</style>
