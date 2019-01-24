<template>
  <div class="wrapper" ref="sliderWrapper">
    <div ref="slider">
      <banner :sightName="sightName" :bannerImg="bannerImg" @bannerClick="handleBannerOpen"></banner>
      <list :list="list"></list>
      <div style="height: 4rem"></div>
    </div>
    <detail-header ref="header"></detail-header>
    <fade>
      <gallary :images="gallaryImgs" v-if="showGallary" @close="handleGallaryClose"></gallary>
    </fade>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import axios from 'axios'
import Banner from './components/banner/banner'
import DetailHeader from './components/header/header'
import Gallary from 'common/gallary/gallary'
import List from './components/list/list'
import Fade from 'common/fade/fade'
export default {
  name: 'detail',
  components: {
    List,
    Banner,
    DetailHeader,
    Gallary,
    Fade
  },
  data () {
    return {
      showGallary: false,
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
    }
  },
  methods: {
    handleBannerOpen () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    },
    getDetailInfo () {
      axios.get('/api/detail.json', {params: {id: this.$route.params.id}}).then(response => {
        response = response.data
        if (response.ret && response.data) {
          const data = response.data
          this.sightName = data.sightName
          this.bannerImg = data.bannerImg
          this.gallaryImgs = data.gallaryImgs
          this.list = data.categoryList
        }
      })
    }
  },
  created () {
    this.getDetailInfo()
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.sliderWrapper, {
      probeType: 3
    })
    this.scroll.on('scroll', (pos) => {
      const top = -pos.y
      if (top > 50) {
        let opacity = (top - 50) / 50
        opacity = opacity > 1 ? 1 : opacity
        this.$refs.header.showHeader(true, opacity)
      } else {
        this.$refs.header.showHeader(false)
      }
    })
  }
}
</script>

<style scoped lang="stylus">
.wrapper
  position fixed
  left 0
  right 0
  top: 0
  bottom 0
  overflow hidden
</style>
