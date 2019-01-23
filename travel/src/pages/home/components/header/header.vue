<template>
  <div class="header">
    <div class="header-left">
      <div class="icon icon-back back"></div>
    </div>
    <div class="header-input">
      <span class="icon icon-search"></span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="icon icon-arrow arrow"></span>
      </div>
    </router-link>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'home-header',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style scoped lang="stylus">
  @import "header.styl"
</style>
