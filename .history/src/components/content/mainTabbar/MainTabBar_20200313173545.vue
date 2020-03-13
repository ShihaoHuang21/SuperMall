<template>
  <div class="main-tab-bar">
    <tab-bar>
      <tab-bar-item>
        <img slot="item-icon"
             src="../../../assets/img/tabbar/home.svg"
             alt="">
        <img slot="item-icon"
             src="../../../assets/img/tabbar/home_active.svg"
             alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>

      <tab-bar-item>
        <img slot="item-icon"
             src="../../../assets/img/tabbar/category.svg"
             alt="">
        <img slot="item-icon"
             src="../../../assets/img/tabbar/category_active.svg"
             alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>

      <tab-bar-item>
        <img slot="item-icon"
             src="../../../assets/img/tabbar/shopcart.svg"
             alt="">
        <img slot="item-icon"
             src="../../../assets/img/tabbar/shopcart_active.svg"
             alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>

      <tab-bar-item>
        <img slot="item-icon"
             src="../../../assets/img/tabbar/shopcart.svg"
             alt="">
        <img slot="item-icon"
             src="../../../assets/img/tabbar/shopcart_active.svg"
             alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from '../../../components/common/tabbar/TabBar'
import TabBarItem from '../../../components/common/tabbar/TabBarItem'
export default {
  name: '',
  components: { TabBar, TabBarItem },
  data () {
    return {

    }
  }
}
</script>

<style scoped></style>
