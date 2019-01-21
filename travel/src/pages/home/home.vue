<template>
  <div>
    <home-header></home-header>
    <slider></slider>
  </div>
</template>

<script>
import HomeHeader from 'components/header/header'
import Slider from 'components/slider/slider'
export default {
  name: 'home',
  components: {
    HomeHeader,
    Slider
  }
}
</script>

<style scoped>
</style>
