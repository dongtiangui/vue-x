<template>
  <div class="head-search">
    <p><i class="fa fa-map-marker fa-3x"></i><br>
      <router-link to="/city"><span> {{ search_info }} </span></router-link>
    </p>
    <div class="index-search">
      <el-input
        placeholder="搜索"
        v-model="search_info"
        clearable>
      </el-input>
    </div>
    <p><i class="el-icon-full-screen" style="font-size: 3em"></i></p>
  </div>
</template>
<script>
export default {
  name: 'search',
  data () {
    return {
      'localtion': '贵阳',
      'search_info': ''
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
  .head-search i:nth-child(2){
    font-size: 3em;
  }
  .head-search span{
    font-size: 12px;
  }
  .index-search{
    height: 50px !important;
    width: 70% !important;
  }
  .index-search input{
    width: 100%;
    height: 30px;
    border-radius: 15px;
  }
  p{
    color: white;
  }

</style>
