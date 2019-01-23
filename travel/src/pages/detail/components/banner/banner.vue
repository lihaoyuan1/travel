<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1507/64/34362835b4a219af8b36803d31a6380f.water.jpg_600x330_4ae7abf5.jpg">
      <div class="banner-info">
        <div class="banner-title">大连圣亚海洋世界(AAAA景区)</div>
        <div class="banner-number"><span class="icon icon-image image"></span>&nbsp;39</div>
      </div>
    </div>
    <gallary :images="images" v-if="showGallary" @close="handleGallaryClose"></gallary>
  </div>
</template>

<script>
import Gallary from 'common/gallary/gallary'
export default {
  name: 'banner',
  data () {
    return {
      showGallary: false,
      images: [
        'http://img1.qunarzz.com/sight/p0/1412/29/b332c6de775de6b9c2ca2cafca33a963.water.jpg_r_800x800_8deed802.jpg',
        'http://img1.qunarzz.com/sight/p0/1412/29/b332c6de775de6b9c2ca2cafca33a963.water.jpg_r_800x800_8deed802.jpg',
        'http://img1.qunarzz.com/sight/p0/1412/29/b332c6de775de6b9c2ca2cafca33a963.water.jpg_r_800x800_8deed802.jpg',
        'http://img1.qunarzz.com/sight/p0/1412/29/b332c6de775de6b9c2ca2cafca33a963.water.jpg_r_800x800_8deed802.jpg'
      ]
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    Gallary
  }
}
</script>

<style scoped lang="stylus">
  @import "banner.styl"
</style>
