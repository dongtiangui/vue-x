<template>
    <div id="app-index">
      <!--路由地址-->
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
              <!--商品组件复用-->
             <order-page>

             </order-page>

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
import order from '../components/order'
export default {
  name: 'index',
  data () {
    return {
      selected: '优品',
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
    'home-page': home,
    'order-page': order
  }
}
</script>

<style scoped>
#app-index{
  background-color: #ffff;
  font-size: 12px;
}
.page-tabbar {
  overflow-y: hidden;
  height: auto;
}
.page-wrap {
  overflow-y: hidden;
  height: 100%;
  padding-bottom: 100px;
}
.page-tabbar-container{
  height: 100%;
}
</style>
