<template>
  <div class="nav-bar">
    <div>
      <slot></slot>
    </div>
    <div>
      <slot></slot>
    </div>

    <div>
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
