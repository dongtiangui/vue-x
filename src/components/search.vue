<template>
  <div class="head-search">
    <p><i class="fa fa-map-marker fa-3x"></i><br>
      <span> {{ localtion }} </span>
    </p>
    <mt-search class="index-search" v-model="value"
               cancel-text="取消"
               placeholder="搜索">
    </mt-search>
    <p><i class="fa fa-camera fa-3x"></i></p>
  </div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      'localtion': '贵阳'
    }
  }
}
</script>

<style scoped>
  .head-search{
    display: flex;
    position: relative;
    width: 100%;
    height: 50px;
    top: 0;
    left: 5%;
    right: 5%;
    bottom: 20px;
    text-align: center;
    margin: 0 auto;
  }
  .head-search p:nth-child(1){
    width: 10%;
  }
  .head-search p:nth-child(2){
    width: 5%;
  }
  .head-search span{
    font-size: 12px;
  }
  .index-search{
    height: 50px !important;
    width: 75% !important;
  }

</style>
