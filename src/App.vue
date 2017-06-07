<template>
  <div id="app">
    <search-navbar></search-navbar>

    <div class="container-fluid content-container">
      <div class="list-group route-list">
        <div class="list-group-item list-group-item-action">
          <div class="route-detail">
            <div class="route-number">650</div>
            <div class="route-dest">往國父紀念館</div>
          </div>
          <div class="route-name">萬隆</div>
          <span class="badge badge-default badge-pill badge-warning">3 min</span>
        </div>
        <div class="list-group-item list-group-item-action">
          <div class="route-detail">
            <div class="route-number">53</div>
            <div class="route-dest">往太原火車站</div>
          </div>
          <div class="route-name">大明國光路口</div>
          <span class="badge badge-default badge-pill badge-info">15 min</span>
        </div>
        <div class="list-group-item list-group-item-action">
          <div class="route-detail">
            <div class="route-number">18</div>
            <div class="route-dest">往萬華</div>
          </div>
          <div class="route-name">黎忠市場</div>
          <span class="badge badge-default badge-pill">未發車</span>
        </div>
        <div class="list-group-item list-group-item-action">
          <div class="route-detail">
            <div class="route-number">292</div>
            <div class="route-dest">往二重</div>
          </div>
          <div class="route-name">信義通化街口</div>
          <span class="badge badge-default badge-pill badge-danger">即將抵達</span>
        </div>
      </div>
    </div>

    <tab></tab>
  </div>
</template>

<script>
import SearchNavbar from '@/components/SearchNavbar'
import Tab from '@/components/Tab'

export default {
  name: 'App',
  components: {
    SearchNavbar,
    Tab
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

.content-container {
  flex: 1;
  overflow: scroll;
  padding-top: .5em;
  padding-bottom: .5em;
  width: 100%;

  .route-list {
    width: 100%;

    .list-group-item {
      padding-left: .5em;
      padding-right: .5em;
      display: flex;
      justify-content: space-between;

      .route-detail {
        padding-right: .4em;
      }

      .route-dest {
        width: 5em;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: .8em;
        color: #666;
      }

      .route-name {
        flex: 1;
      }
    }
  }
}
</style>
