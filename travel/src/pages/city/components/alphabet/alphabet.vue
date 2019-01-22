<template>
  <ul class="list">
    <li class="item" v-for="(item, key) in cities" :key="key">{{key}}</li>
  </ul>
</template>

<script>
export default {
  name: 'alphabet',
  props: {
    cities: Object
  }
}
</script>

<style scoped lang="stylus">
  @import "alphabet.styl"
</style>
