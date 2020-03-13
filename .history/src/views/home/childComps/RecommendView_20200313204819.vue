<template>
  <div class="RecommendView">
    <div v-for="item in recommends"></div>
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
