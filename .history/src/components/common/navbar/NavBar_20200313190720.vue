<template>
  <div class="nav-bar">
    <div class="left">
      <slot></slot>
    </div>

    <div class="center">
      <slot></slot>
    </div>

    <div class="right">
      <slot></slot>
    </div>

  </div>
</template>

<script>
export default {
  name: 'NavBar',
  components: {},
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="stylus"></style>
