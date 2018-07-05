<template>
  <div class="goods">
    <div class="menu-wrapper"></div>
    <div class="goods-wrapper"></div>
  </div>
</template>

<script>
  export default {
    name: 'Goods',
    data() {
      return {
        msg: 'goods component'
      }
    }
  }
</script>

<style scoped lang="scss">
  .goods {
    position: absolute;
    width: 100%;
    top: 189px;
    bottom: 46px;
    display: flex;
    overflow: hidden;


    .menu-wrapper {
      display: flex;
      flex: 0 0 80px;
      width: 80px;
      background-color: #f3f5f7;

    }

    .goods-wrapper {
      flex: 1;
    }
  }
</style>
