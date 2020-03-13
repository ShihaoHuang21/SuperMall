<template>
  <div class="home">
    <!-- 导航栏 -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <Swiper>
      <swiper-item v-for="item in banners">
        <a :href="item.link"> <img :src="item.image" alt="" /> </a>
      </swiper-item>
    </Swiper>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
import { getHomeMultidata } from '../../network/home'
import { Swiper, SwiperItem } from '../../components/common/swiper'
export default {
  name: '',
  components: {
    NavBar,
    Swiper,
    SwiperItem
  },
  data() {
    return {
      // result: null,
      banners: [],
      recommend: [],
      keywords: [],
      dKeyword: []
    }
  },
  created() {
    //请求多个数据
    getHomeMultidata().then(res => {
      // console.log(res)
      this.banners = res.data.banner
      this.recommend = res.data.recommend
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
