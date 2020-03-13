<template>
  <div id="home">
    <!-- 导航栏 -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control
      class="tab-control"
      :titles="['流行'，'新款','精选']"
    ></tab-control>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
import TabControl from '../../components/content/tabControl/TabControl'

import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

import { getHomeMultidata } from '../../network/home'

export default {
  name: '',
  components: {
    NavBar,
    TabControl,

    HomeSwiper,
    RecommendView,
    FeatureView
  },
  data() {
    return {
      // result: null,
      banners: [],
      recommends: []
      // keywords: [],
      // dKeyword: []
    }
  },
  created() {
    //请求多个数据
    getHomeMultidata().then(res => {
      console.log(res)
      // 1.请求多个数据
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
      // this.keywords = res.data.keywords
      // this.dKeyword = res.data.dKeyword
    })
  }
}
</script>

<style scoped>
#home {
  padding-top: 44px;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
</style>
