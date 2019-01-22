<template>
  <div>
    <home-header></home-header>
    <slider></slider>
    <icons></icons>
    <recommend></recommend>
    <weekend></weekend>
  </div>
</template>

<script>
import HomeHeader from 'components/header/header'
import Slider from 'components/slider/slider'
import Icons from 'components/icons/icons'
import Recommend from 'components/recommend/recommend'
import Weekend from 'components/weekend/weekend'
export default {
  name: 'home',
  components: {
    HomeHeader,
    Slider,
    Icons,
    Recommend,
    Weekend
  }
}
</script>

<style scoped>
</style>
