<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
        <img class="item-img" :src="item.src">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-btn">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'recommend',
  data () {
    return {
      recommendList: [
        {
          id: 0,
          src: 'http://img1.qunarzz.com/sight/p0/1507/64/34362835b4a219af8b36803d31a6380f.water.jpg_200x200_bc5c0452.jpg',
          title: '深圳小梅沙海洋世界',
          desc: '广东省深圳市盐田区小梅沙海洋世界'
        },
        {
          id: 1,
          src: 'http://img1.qunarzz.com/sight/p0/1507/64/34362835b4a219af8b36803d31a6380f.water.jpg_200x200_bc5c0452.jpg',
          title: '深圳小梅沙海洋世界',
          desc: '广东省深圳市盐田区小梅沙海洋世界'
        },
        {
          id: 2,
          src: 'http://img1.qunarzz.com/sight/p0/1507/64/34362835b4a219af8b36803d31a6380f.water.jpg_200x200_bc5c0452.jpg',
          title: '深圳小梅沙海洋世界',
          desc: '广东省深圳市盐田区小梅沙海洋世界'
        },
        {
          id: 3,
          src: 'http://img1.qunarzz.com/sight/p0/1507/64/34362835b4a219af8b36803d31a6380f.water.jpg_200x200_bc5c0452.jpg',
          title: '深圳小梅沙海洋世界',
          desc: '广东省深圳市盐田区小梅沙海洋世界'
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
  @import "recommend.styl"
</style>
