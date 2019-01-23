<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper" ref="sliderWrapper">
      <div class="slider" ref="slider">
        <img @load="initSlider" class="image" v-for="(item, index) in images" :key="index" :src="item">
      </div>
    </div>
    <div class="page">{{pageInfo}}</div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'gallary',
  props: {
    images: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      currentPageIndex: 0
    }
  },
  computed: {
    pageInfo () {
      return `${this.currentPageIndex + 1} / ${this.images.length}`
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    },
    initSlider () {
      if (!this.slider) {
        this._initSliderWidth()
        this._initSlider()
      }
    },
    _initSliderWidth (isResize) {
      this.child = this.$refs.slider.children
      let wrapperWidth = this.$refs.sliderWrapper.clientWidth
      let width = 0
      for (let i = 0; i < this.child.length; i++) {
        this.child[i].style.width = `${wrapperWidth}px`
        width += wrapperWidth
      }
      if (this.loop && !isResize) {
        width += 2 * wrapperWidth
      }
      this.$refs.slider.style.width = `${width}px`
    },
    _initSlider () {
      this.slider = new BScroll(this.$refs.sliderWrapper, {
        scrollX: true,
        scrollY: false,
        momentum: false,
        snap: {
          loop: false,
          threshold: 0.3,
          speed: 400
        }
      })
      this.slider.on('scrollEnd', () => {
        this.currentPageIndex = this.slider.getCurrentPage().pageX
      })
    }
  }
}
</script>

<style scoped lang="stylus">
  @import "gallary.styl"
</style>
