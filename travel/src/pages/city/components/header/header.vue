<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="icon icon-back back"></div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'city-header'
}
</script>

<style scoped lang="stylus">
  @import "header.styl"
</style>
