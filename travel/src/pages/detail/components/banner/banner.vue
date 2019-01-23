<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <router-link tag="div" to="/" class="header-abs">
        <span class="icon icon-back back"></span>
      </router-link>
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1507/64/34362835b4a219af8b36803d31a6380f.water.jpg_600x330_4ae7abf5.jpg">
      <div class="banner-info">
        <div class="banner-title">大连圣亚海洋世界(AAAA景区)</div>
        <div class="banner-number"><span class="icon icon-image image"></span>&nbsp;39</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'banner',
  methods: {
    handleBannerClick () {
      this.$emit('bannerClick')
    }
  }
}
</script>

<style scoped lang="stylus">
  @import "banner.styl"
</style>
