<template>
  <div>
    <h1>商家</h1>
    <p>{{msg}}, {{getId}}</p>
    <p>{{goods}}</p>
  </div>
</template>

<script>
  var appData = require('../../data.json');

  var seller = appData.seller;
  var goods = appData.goods;
  var ratings = appData.ratings;
  export default {
    name: 'seller',
    data() {
      return {
        msg: 'seller component',
        id: '',
        goods: goods
      }
    },
    computed: {
      getId () {
        return this.$route.params.id
      }
    },

    watch : {
      $route (to, from) {
        console.log(to);
        console.log(from);
        console.dir(seller);
        this.id = to.params.id
      }
    }
  }
</script>

<style scoped>

</style>
