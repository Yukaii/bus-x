<template>
  <div class="container-fluid tab-container">
    <router-link class="tab-btn" to="/">
      <icon name="home"></icon>
    </router-link>
    <router-link class="tab-btn" to="/nearby">
      <icon name="map-marker"></icon>
    </router-link>
    <router-link class="tab-btn" to="/">
      <icon name="location-arrow"></icon>
    </router-link>
    <router-link class="tab-btn" to="/">
      <icon name="cog"></icon>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.tab-container {
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0;

  border-style: solid;
  border-width: 1px 0 0 0;
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

  .tab-btn:focus, .tab-btn:hover {
    color: #ca4769;
    background-color: #eee;
  }

  .tab-btn:active {
    color: #ca4769;
  }
}
</style>
