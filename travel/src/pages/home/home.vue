<template>
  <div>
    <home-header :city="city"></home-header>
    <slider :list="swiperList"></slider>
    <icons :list="iconList"></icons>
    <recommend :list="recommendList"></recommend>
    <weekend :list="weekendList"></weekend>
  </div>
</template>

<script>
import HomeHeader from 'components/header/header'
import Slider from 'components/slider/slider'
import Icons from 'components/icons/icons'
import Recommend from 'components/recommend/recommend'
import Weekend from 'components/weekend/weekend'
import axios from 'axios'
export default {
  name: 'home',
  components: {
    HomeHeader,
    Slider,
    Icons,
    Recommend,
    Weekend
  },
  data () {
    return {
      city: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json').then(response => {
        response = response.data
        if (response.ret && response.data) {
          const data = response.data
          this.city = data.city
          this.swiperList = data.swiperList
          this.iconList = data.iconList
          this.recommendList = data.recommendList
          this.weekendList = data.weekendList
        }
      })
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style scoped>
</style>
