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

<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  padding: 2px;
}
</style>
