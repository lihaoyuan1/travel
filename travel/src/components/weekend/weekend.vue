<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.src">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'weekend',
  data () {
    return {
      recommendList: [
        {
          id: 0,
          src: 'http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg',
          title: '深圳小梅沙海洋世界',
          desc: '广东省深圳市盐田区小梅沙海洋世界'
        },
        {
          id: 1,
          src: 'http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg',
          title: '深圳小梅沙海洋世界',
          desc: '广东省深圳市盐田区小梅沙海洋世界'
        },
        {
          id: 2,
          src: 'http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg',
          title: '深圳小梅沙海洋世界',
          desc: '广东省深圳市盐田区小梅沙海洋世界'
        },
        {
          id: 3,
          src: 'http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg',
          title: '深圳小梅沙海洋世界',
          desc: '广东省深圳市盐田区小梅沙海洋世界'
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
  @import "weekend.styl";
</style>
