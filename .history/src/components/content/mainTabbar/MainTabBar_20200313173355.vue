<template>
  <div class="main-tab-bar">
    <tab-bar>
      <tab-bar-item>
        <img slot="item-icon"
             src="../../../assets/img/tabbar/home.svg"
             alt="">
      </tab-bar-item>

    </tab-bar>
  </div>
</template>

<script>
import TabBar from '../../../components/common/tabbar/TabBar'
import TabBarItem from '../../../components/common/tabbar/TabBarItem'
export default {
  name: '',
  components: { TabBar, TabBarItem },
  data () {
    return {

    }
  }
}
</script>

<style scoped></style>
