<template>
  <div id="app">
    <nav class="navbar navbar-light bg-faded">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="搜尋路線">
      </div>
    </nav>

    <div class="container-fluid content-container">
      <div class="list-group route-list">
        <div class="list-group-item list-group-item-action">
          <div class="route-detail">
            <div class="route-number">650</div>
            <div class="route-dest">往國父紀念館</div>
          </div>
          <div class="route-name">萬隆</div>
          <span class="badge badge-default badge-pill">3 min</span>
        </div>
        <div class="list-group-item list-group-item-action">
          <div class="route-detail">
            <div class="route-number">53</div>
            <div class="route-dest">往太原火車站</div>
          </div>
          <div class="route-name">大明國光路口</div>
          <span class="badge badge-default badge-pill">15 min</span>
        </div>
        <div class="list-group-item list-group-item-action">
          <div class="route-detail">
            <div class="route-number">18</div>
            <div class="route-dest">往萬華</div>
          </div>
          <div class="route-name">黎忠市場</div>
          <span class="badge badge-default badge-pill">未發車</span>
        </div>
      </div>
    </div>

    <div class="container-fluid tab-container">
      <div class="tab-btn">
        <icon name="home"></icon>
      </div>
      <div class="tab-btn">
        <icon name="map-marker"></icon>
      </div>
      <div class="tab-btn">
        <icon name="location-arrow"></icon>
      </div>
      <div class="tab-btn">
        <icon name="cog"></icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" scoped>
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.navbar {
  text-align: center;
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

.tab-container {
  height: 64px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0;

  border-style: solid;
  border-width: 2px 0 0 0;
  border-color: #eee;

  .tab-btn {
    font-size: 1.3em;
    text-align: center;
    color: #666;

    flex: 1;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }

  .tab-btn:active, .tab-btn:focus, .tab-btn:hover {
    color: #ca4769;
    background-color: #eee;
  }
}
</style>
