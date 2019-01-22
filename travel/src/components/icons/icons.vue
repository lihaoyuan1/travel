<template>
  <div class="wrapper" ref="sliderWrapper">
    <div class="slider" ref="slider">
      <div class="icons" v-for="(i, index) in page" :key="index">
        <div class="icon" v-for="item in _slice(index)" :key="item.id">
          <div class="icon-img">
            <img class="img" :src="item.src">
          </div>
          <p class="icon-desc">{{item.title}}</p>
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
  data () {
    return {
      currentPageIndex: 0,
      dots: [],
      icons: [
        {id: 0, title: '景点门票', src: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'},
        {id: 1, title: '一日游', src: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png'},
        {id: 2, title: '深圳必游', src: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png'},
        {id: 3, title: '海洋馆', src: 'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png'},
        {id: 4, title: '动植物园', src: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png'},
        {id: 5, title: '泡温泉', src: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png'},
        {id: 6, title: '直接之窗', src: 'http://img1.qunarzz.com/piao/fusion/1803/a6/6d97515091789602.png'},
        {id: 7, title: '滑雪季', src: 'http://img1.qunarzz.com/piao/fusion/1803/fc/b10a6b2e4f0fe102.png'},
        {id: 8, title: '东部华侨城', src: 'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png'},
        {id: 9, title: '溜娃儿', src: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png'}
      ]
    }
  },
  computed: {
    page () {
      return new Array(Math.ceil(this.icons.length / 8))
    }
  },
  mounted () {
    this.timer = setTimeout(() => {
      this._initSliderWidth()
      this._initDots()
      this._initSlider()
    }, 20)
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
      return this.icons.slice(index * 8, (index + 1) * 8)
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
