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
export default {
  name: '',
  components: {},
  data() {
    return {}
  }
}
</script>

<style scoped lang="stylus"></style>
