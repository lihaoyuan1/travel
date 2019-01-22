<template>
  <div>
    <city-header></city-header>
    <search></search>
  </div>
</template>

<script>
import CityHeader from './components/header/header'
import Search from './components/search/search'
export default {
  name: 'city',
  components: {
    CityHeader,
    Search
  }
}
</script>

<style scoped>
</style>
