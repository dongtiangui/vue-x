<template>
    <div id="app-index">
      <!--路由地址-->
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

      <div class="page-tabbar">
        <div class="page-wrap">
          <mt-tab-container class="page-tabbar-container" v-model="selected">
            <mt-tab-container-item id="优品">
              <!--home业务代码-->
              <home-page>
                  <!--home组件复用-->
              </home-page>

            </mt-tab-container-item>
            <mt-tab-container-item id="发现">
              <!--订单页面-->
              <mt-cell v-for="item in list" v-bind:key="item.id" :title="item.text"  />
            </mt-tab-container-item>
            <mt-tab-container-item id="优帮">
              <!---->
              <mt-cell v-for="item in list" v-bind:key="item.id" :title="item.text"  />
            </mt-tab-container-item>

            <mt-tab-container-item id="购物车">
              <!---->
              <mt-cell v-for="item in list" v-bind:key="item.id" :title="item.text"  />
            </mt-tab-container-item>

            <mt-tab-container-item id="我的">
              <div class="page-part">
                <mt-cell  v-for="item in list" v-bind:key="item.id" :title="item.text" />
              </div>
              <router-link to="/">
                <!-- button -->
                <mt-button type="danger" size="large">退出</mt-button>
              </router-link>
            </mt-tab-container-item>
          </mt-tab-container>
        </div>

        <mt-tabbar v-model="selected" fixed>
          <mt-tab-item id="优品">
            <img slot="icon" src="../assets/shouy-exuanzhong.png">
            优品
          </mt-tab-item>
          <mt-tab-item id="发现">
            <img slot="icon" src="../assets/pyq.png">
            发现
          </mt-tab-item>
          <mt-tab-item id="优帮">
            <img slot="icon" src="../assets/dianpu-xuanzhong.png">
            优帮
          </mt-tab-item>
          <mt-tab-item id="购物车">
            <img slot="icon" src="../assets/ziyuan_5.png">
            购物车
          </mt-tab-item>
          <mt-tab-item id="我的">
            <img slot="icon" src="../assets/wode-touxiang.png">
            我的
          </mt-tab-item>
        </mt-tabbar>
      </div>
    </div>
</template>

<script>
import home from '../components/home'
export default {
  name: 'index',
  data () {
    return {
      selected: '优品',
      localtion: '贵阳',
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
    'home-page': home
  }
}
</script>

<style scoped>
#app-index{
  background-color: #ffff;
  font-size: 12px;
}
.head-search{
  display: flex;
  position: absolute;
  width: 100%;
  height: 50px;
  top: 0;
  left: 5%;
  right: 5%;
  bottom: 20px;
  text-align: center;
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

.page-tabbar {
  overflow: hidden;
  height: 100vh;
}
.page-wrap {
  overflow: auto;
  height: 100%;
  padding-bottom: 100px;
}
</style>
