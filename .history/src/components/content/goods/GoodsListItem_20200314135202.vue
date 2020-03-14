<template>
  <div class="goods-item">
    <img :src="goodsItem.show.img"
         alt="">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  components: {},
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="stylus"></style>
