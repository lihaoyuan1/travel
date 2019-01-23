<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <router-link tag="div" to="/" class="header-abs">
        <span class="icon icon-back back"></span>
      </router-link>
      <img class="banner-img" :src="bannerImg">
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-number"><span class="icon icon-image image"></span>&nbsp;39</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'banner',
  props: {
    sightName: String,
    bannerImg: String
  },
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
