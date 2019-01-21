<template>
  <div class="slider-wrapper" ref="sliderWrapper">
    <div class="slider" ref="slider">
      <template v-for="item in list">
        <img :key="item.id" class="img" :src="item.src">
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
      currentPageIndex: 0,
      list: [
        {id: 0, src: 'https://img1.qunarzz.com/vc/a0/b2/8b/3e3a346ff497f75c338230b09a.jpg'},
        {id: 1, src: 'https://img1.qunarzz.com/vc/00/61/a1/4a3e60cef3ef6b1001e4cc84de.jpg'},
        {id: 2, src: 'https://img1.qunarzz.com/vc/a9/f4/f1/bb33ddb697f07c375e7af81256.jpg'},
        {id: 3, src: 'https://img1.qunarzz.com/vc/f5/10/9c/b647d3ee724a720ce0fa6101f0.jpg'},
        {id: 4, src: 'https://img1.qunarzz.com/vc/d4/d0/62/a6b7c23c1b251dfc874ce66efa.jpg'}
      ]
    }
  },
  mounted () {
    this.timer = setTimeout(() => {
      this._setSliderWidth()
      this._initDots()
      this._initSlider()
      if (this._autoPlay) {
        this._autoPlay()
      }
    }, 20)
    window.addEventListener('resize', () => {
      if (!this.slider) {
        return
      }
      this._setSliderWidth(true)
      this.slider.refresh()
    })
  },
  methods: {
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
        snap: {
          loop: this.loop,
          threshold: 0.3,
          speed: 400
        }
      })
      this.slider.on('scrollEnd', () => {
        this.currentPageIndex = this.slider.getCurrentPage().pageX % 5
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
  },
  destroyed () {
    clearTimeout(this.timer)
  }
}
</script>

<style scoped lang="stylus">
  @import "slider.styl"
</style>
