<template>
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
