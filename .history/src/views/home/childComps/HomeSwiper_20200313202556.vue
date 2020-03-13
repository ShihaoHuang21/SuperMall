<template>
  <div class="HomeSwiper">
    <Swiper>
      <swiper-item v-for="item in banners">
        <a :href="item.link"> <img :src="item.image" alt="" /> </a>
      </swiper-item>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from '../../../components/common/swiper'
export default {
  name: '',
  components: {
    Swiper,
    SwiperItem
  },
  data() {
    return {}
  }
}
</script>

<style scoped lang="stylus"></style>
