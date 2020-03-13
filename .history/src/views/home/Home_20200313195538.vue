<template>
  <div class="home">
    <!-- 导航栏 -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <div>{{ result }}</div>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
import { getHomeMultidata } from '../../network/home'
export default {
  name: '',
  components: { NavBar },
  data() {
    return {
      result: null
    }
  },
  created() {
    //请求多个数据
    getHomeMultidata().then(res => {
      console.log(res)
      this.result = res
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
