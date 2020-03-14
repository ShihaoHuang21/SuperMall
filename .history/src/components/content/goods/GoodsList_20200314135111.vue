<template>
  <div class="goods">
    <goods-list-item v-for="item in goods"
                     :goods-item="item" />
  </div>
</template>

<script>
export default {
  name: 'GoodsList',
  components: {},
  props: {
    goods: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="stylus"></style>
