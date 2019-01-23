<template>
  <div class="slider-wrapper" ref="sliderWrapper">
    <div class="slider" ref="slider">
      <template v-for="item in list">
        <img @load="initSlider" :key="item.id" class="img" :src="item.imgUrl">
      </template>
    </div>
    <div class="dots">
      <span class="dot" v-for="(item, index) in dots" :key="index" :class="{active: currentPageIndex === index}"></span>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'slider',
  props: {
    list: {
      type: Array,
      default: null
    },
    loop: {
      type: Boolean,
      default: true
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 3000
    }
  },
  data () {
    return {
      dots: [],
      currentPageIndex: 0
    }
  },
  mounted () {
    window.addEventListener('resize', () => {
      if (!this.slider) {
        return
      }
      this._setSliderWidth(true)
      this.slider.refresh()
    })
  },
  methods: {
    initSlider () {
      if (!this.slider) {
        this._setSliderWidth()
        this._initDots()
        this._initSlider()
        if (this._autoPlay) {
          this._autoPlay()
        }
      }
    },
    _setSliderWidth (isResize) {
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
    _initDots () {
      this.dots = new Array(this.child.length)
    },
    _initSlider () {
      this.slider = new BScroll(this.$refs.sliderWrapper, {
        scrollX: true,
        scrollY: false,
        momentum: false,
        eventPassthrough: 'vertical',
        snap: {
          loop: this.loop,
          threshold: 0.3,
          speed: 400
        }
      })
      this.slider.on('scrollEnd', () => {
        this.currentPageIndex = this.slider.getCurrentPage().pageX % this.child.length
        if (this.autoPlay) {
          clearTimeout(this.timer)
          this._autoPlay()
        }
      })
      this.slider.on('scrollStart', () => {
        clearTimeout(this.timer)
      })
    },
    _autoPlay () {
      this.timer = setTimeout(() => {
        this.slider.next()
      }, this.interval)
    }
  }
}
</script>

<style scoped lang="stylus">
  @import "slider.styl"
</style>
