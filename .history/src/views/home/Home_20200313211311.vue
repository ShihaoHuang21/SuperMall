<template>
  <div class="home">
    <!-- 导航栏 -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import { getHomeMultidata } from '../../network/home'

export default {
  name: '',
  components: {
    NavBar,
    HomeSwiper,
    RecommendView
  },
  data() {
    return {
      // result: null,
      banners: [],
      recommends: [],
      keywords: [],
      dKeyword: []
    }
  },
  created() {
    //请求多个数据
    getHomeMultidata().then(res => {
      console.log(res)
      this.banners = res.data.banners
      this.recommends = res.data.recommend
      this.keywords = res.data.keywords
      this.dKeyword = res.data.dKeyword
    })
  }
}
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
