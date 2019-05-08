<template>
    <div class="page-tabbar">
      <!--搜索组件-->
      <v-search class="v-search">
      </v-search>
      <mt-swipe :auto="4000" class="index-swipe">
        <mt-swipe-item>
          <img src="../assets/image/11690381.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../assets/image/11690381.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../assets/image/11690381.jpg" alt="">
        </mt-swipe-item>
      </mt-swipe>
      <div class="index-check">
        <a><i class="fa fa-3x fa-shopping-bag"></i><br><span>商品</span></a>
        <a><i class="fa fa-3x fa-shopping-cart"></i><br><span>商家</span></a>
        <a><i class="fa fa-3x fa-camera"></i><br><span>数码</span></a>
        <a><i class="fa fa-3x fa-car"></i><br><span>出行</span></a>
      </div>
      <div class="index-shop-main">
        <div>
          <a href="#"><img src="../assets/image/1.jpg" alt=""></a>
          <a><img src="../assets/image/1.jpg" alt=""></a>
        </div>
        <div>
          <!--第二个空格-->
          <a><img src="../assets/image/1.jpg" alt=""></a>
          <a><img src="../assets/image/1.jpg" alt=""></a>
        </div>
      </div>
    </div>
</template>

<script>
import search from '../components/search'

export default {
  name: 'page-tabbar',
  data () {
    return {
      selected: '1',
      list: [{
        id: 1,
        text: 'list'
      }, {
        id: 2,
        text: 'list'
      }, {
        id: 3,
        text: 'list'
      }, {
        id: 4,
        text: 'list'
      }, {
        id: 5,
        text: 'list'
      }, {
        id: 6,
        text: 'list'
      }]
    }
  },
  components: {
    'v-search': search
  }
}
</script>

<style>
  .page-tabbar{
    height: 150vh!important;
    overflow-y: hidden;
  }
  .index-swipe{
    height: 200px;
    width: 100%;
    padding-top: 20px;
  }
  .index-swipe img{
    height: 200px;
    width: 100%;
  }
  .index-check{
    display: inline-flex;
    position: relative;
    top: 30px;
    text-align: center;
    width: 100%;
    height: 55px;
    background: ghostwhite;
  }
  .index-check a{
    width: 25%;
    height: auto;
  }
  .index-check a:nth-child(2){
    color: red;
  }
  .index-check a:nth-child(3){
    color: forestgreen;
  }
  .index-shop-main{
    height: 200px;
    width: 100%;
  }
  .index-shop-main div{
    display: inline-flex;
    position: relative;
    width: 80%;
    top: 50px;
    margin-top: 20px;
    height: 100px;
    border: grey solid 1px;
    box-shadow: 1px 2px 3px darkgray;
    border-radius: 5px;
  }
  .index-shop-main div a{
    margin: 0 auto;
  }
  .index-shop-main div img{
    height: 100px;
    width: 80%;
  }
  .v-search{
    display: flex;
    position: absolute;
    width: 100%;
    height: 50px;
    top: 0;
    left: 5%;
    right: 5%;
    bottom: 20px;
    text-align: center;
    margin: 0 auto;
  }
</style>
