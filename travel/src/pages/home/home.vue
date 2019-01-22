<template>
  <div>
    <home-header></home-header>
    <slider></slider>
    <icons></icons>
  </div>
</template>

<script>
import HomeHeader from 'components/header/header'
import Slider from 'components/slider/slider'
import Icons from 'components/icons/icons'
export default {
  name: 'home',
  components: {
    HomeHeader,
    Slider,
    Icons
  }
}
</script>

<style scoped>
</style>
