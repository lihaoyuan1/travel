<template>
  <div class="wrapper" ref="sliderWrapper">
    <div ref="slider">
      <banner @bannerClick="handleBannerOpen"></banner>
      <list :list="list"></list>
      <div style="height: 50rem"></div>
    </div>
    <detail-header ref="header"></detail-header>
    <gallary :images="images" v-if="showGallary" @close="handleGallaryClose"></gallary>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import Banner from './components/banner/banner'
import DetailHeader from './components/header/header'
import Gallary from 'common/gallary/gallary'
import List from './components/list/list'
export default {
  name: 'detail',
  components: {
    Banner,
    DetailHeader,
    Gallary,
    List
  },
  data () {
    return {
      showGallary: false,
      images: [
        'http://img1.qunarzz.com/sight/p0/1412/29/b332c6de775de6b9c2ca2cafca33a963.water.jpg_r_800x800_8deed802.jpg',
        'http://img1.qunarzz.com/sight/p0/1412/29/b332c6de775de6b9c2ca2cafca33a963.water.jpg_r_800x800_8deed802.jpg',
        'http://img1.qunarzz.com/sight/p0/1412/29/b332c6de775de6b9c2ca2cafca33a963.water.jpg_r_800x800_8deed802.jpg',
        'http://img1.qunarzz.com/sight/p0/1412/29/b332c6de775de6b9c2ca2cafca33a963.water.jpg_r_800x800_8deed802.jpg'
      ],
      list: [
        {
          title: '成人票',
          children: [{
            title: '成人三管联票',
            children: [{
              title: '成人三管联票 - 某一连锁店销售'
            }]
          }, {
            title: '成人五馆联票'
          }]
        },
        {
          title: '学生票'
        },
        {
          title: '儿童票'
        },
        {
          title: '特惠票'
        }
      ]
    }
  },
  methods: {
    handleBannerOpen () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
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
