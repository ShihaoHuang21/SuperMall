<template>
  <div class="RecommendView">
    <div v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.text }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendView',
  components: {},
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  },

  data() {
    return {}
  }
}
</script>

<style scoped lang="stylus"></style>
