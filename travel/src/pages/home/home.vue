<template>
  <div>
    <home-header></home-header>
    <div class="wrapper" ref="wrapper">
      <div>
        <slider :list="swiperList"></slider>
        <icons :list="iconList"></icons>
        <recommend :list="recommendList"></recommend>
        <weekend :list="weekendList"></weekend>
      </div>
    </div>
  </div>
</template>

<script>
import HomeHeader from './components/header/header'
import Slider from './components/slider/slider'
import Icons from './components/icons/icons'
import Recommend from './components/recommend/recommend'
import Weekend from './components/weekend/weekend'
import axios from 'axios'
import BScroll from 'better-scroll'
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
          this.swiperList = data.swiperList
          this.iconList = data.iconList
          this.recommendList = data.recommendList
          this.weekendList = data.weekendList
        }
      })
    }
  },
  created () {
    this.getHomeInfo()
  },
  mounted () {
    this.timer = setTimeout(() => {
      this.scroll = new BScroll(this.$refs.wrapper)
    })
  },
  destroyed () {
    clearTimeout(this.timer)
  }
}
</script>

<style scoped lang="stylus">
.wrapper
  position absolute
  top .86rem
  left 0
  right 0
  bottom 0
  overflow hidden
</style>
