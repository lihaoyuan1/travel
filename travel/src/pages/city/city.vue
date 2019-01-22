<template>
  <div>
    <city-header></city-header>
    <search></search>
    <list></list>
    <alphabet></alphabet>
  </div>
</template>

<script>
import CityHeader from './components/header/header'
import Search from './components/search/search'
import List from './components/list/list'
import Alphabet from './components/alphabet/alphabet'
export default {
  name: 'city',
  components: {
    CityHeader,
    Search,
    List,
    Alphabet
  }
}
</script>

<style scoped>
</style>
