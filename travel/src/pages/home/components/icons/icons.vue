<template>
  <div class="wrapper1" ref="sliderWrapper">
    <div class="slider" ref="slider">
      <div class="icons" v-for="(i, index) in page" :key="index">
        <div class="icon" v-for="item in _slice(index)" :key="item.id">
          <div class="icon-img">
            <img class="img" :src="item.imgUrl">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </div>
    </div>
    <div class="dots">
      <span class="dot" v-for="(i, index) in dots" :key="index" :class="{active: currentPageIndex === index}"></span>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'icons',
  props: {
    list: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      currentPageIndex: 0,
      dots: []
    }
  },
  computed: {
    page () {
      return new Array(Math.ceil(this.list.length / 8))
    }
  },
  mounted () {
    this.timer = setTimeout(() => {
      this._initSliderWidth()
      this._initDots()
      this._initSlider()
    }, 30)
    window.addEventListener('resize', () => {
      if (!this.slider) {
        return
      }
      this._initSliderWidth()
      this.slider.refresh()
    })
  },
  methods: {
    _initSliderWidth () {
      this.child = this.$refs.slider.children
      let wrapperWidth = this.$refs.sliderWrapper.clientWidth
      let width = 0
      for (let i = 0; i < this.child.length; i++) {
        this.child[i].style.width = `${wrapperWidth}px`
        width += wrapperWidth
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
          loop: false,
          threshold: 0.3,
          speed: 400
        }
      })
      this.slider.on('scrollEnd', () => {
        this.currentPageIndex = this.slider.getCurrentPage().pageX % this.child.length
      })
    },
    _slice (index) {
      return this.list.slice(index * 8, (index + 1) * 8)
    }
  },
  destroyed () {
    clearTimeout(this.timer)
  }
}
</script>

<style scoped lang="stylus">
  @import "icons.styl";
</style>
