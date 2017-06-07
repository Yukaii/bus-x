<template>
  <div id="app">
    <div class="page-container">
      <router-view></router-view>
    </div>

    <tabs></tabs>
  </div>
</template>

<script>
import Tabs from '@/components/Tabs'

export default {
  name: 'App',
  components: {
    Tabs
  }
}
</script>

<style lang="scss" scoped>
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.page-container {
  flex: 1;
}
</style>
