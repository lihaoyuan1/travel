<template>
  <div>
    <div class="item" v-for="(item, index) of list" :key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div v-if="item.children" class="item-children">
        <list :list="item.children"></list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list',
  props: {
    list: Array
  }
}
</script>

<style scoped lang="stylus">
  @import "list.styl"
</style>
