<template>
  <div class="home">
    <nav-bar clsaa="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
export default {
  name: '',
  components: { NavBar },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.home-nav {
  background: var(--co);
}
</style>
