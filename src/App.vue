<template>
  <div id="app">
    <div class="container-fluid content-container">
      Content Here
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

<style lang="scss">
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.content-container {
  flex: 1;
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
    background-color: #fae8ef;
  }
}
</style>
