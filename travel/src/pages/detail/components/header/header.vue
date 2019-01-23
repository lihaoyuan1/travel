<template>
  <div>
    <div class="header-fixed" :style="opacityStyle" v-show="showFlag">
      <span class="icon icon-back back" @click="back"></span>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail-header',
  data () {
    return {
      showFlag: false,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    showHeader (flag, opacity) {
      if (flag === false) {
        this.showFlag = false
      } else {
        this.showFlag = true
        this.opacityStyle = {opacity}
      }
    },
    back () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped lang="stylus">
  @import "header.styl"
</style>
