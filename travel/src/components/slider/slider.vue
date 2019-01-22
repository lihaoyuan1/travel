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
        {id: 0, src: 'http://img1.qunarzz.com/piao/fusion/1812/d6/daa880b254940402.jpg_750x200_b114308a.jpg'},
        {id: 1, src: 'http://img1.qunarzz.com/piao/fusion/1811/31/da037478f37cf202.jpg_750x200_fe28d396.jpg'},
        {id: 2, src: 'http://img1.qunarzz.com/piao/fusion/1811/7c/8e5c4ab8ee8b7402.jpg_750x200_dd7a38dd.jpg'},
        {id: 3, src: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/e9b6ede83785c7673eb1bcda5a78f123.jpg_750x200_0e6d0de9.jpg'},
        {id: 4, src: 'http://img1.qunarzz.com/piao/fusion/1809/61/44400d6591891202.jpg_750x200_7565a05c.jpg'},
        {id: 5, src: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/854b2a57bf7025a0f7c639514665dfe4.jpg_750x200_08fdbadb.jpg'},
        {id: 6, src: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/78e46997e9693ecbf5744d87b3fbe224.jpg_750x200_d4e00621.jpg'},
        {id: 7, src: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/f8ea2ffc08ee3ae19654d1095cc57365.jpg_750x200_f9d66f41.jpg'},
        {id: 8, src: 'http://img1.qunarzz.com/piao/fusion/1811/a8/cb43c4ac6c215d02.jpg_750x200_83dee994.jpg'}
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
  },
  destroyed () {
    clearTimeout(this.timer)
  }
}
</script>

<style scoped lang="stylus">
  @import "slider.styl"
</style>
