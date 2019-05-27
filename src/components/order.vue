<template>
  <div id="order">
      <v-search></v-search>
      <div class="order-btn-group">
        <b-button-group>
          <b-button v-on:click="testAjax" variant="info">
            综合<i class="fa fa-sort"></i>
          </b-button>
          <b-button variant="info">
            销量
            <i class="fa fa-sort"></i>
          </b-button>
          <b-button variant="info">
            人气
            <i class="fa fa-sort"></i>
          </b-button>
          <b-button variant="info">
            价格
            <i class="fa fa-sort"></i>
          </b-button>
        </b-button-group>
      </div>
      <v-discover class="disabled-1">

      </v-discover>
      <b-list-group>
          <b-list-group-item v-for="li in list" v-bind:key="li">
            {{ li }}
          </b-list-group-item>
      </b-list-group>
  </div>
</template>

<script>
import search from '../components/search'
import discover from '../components/shop'
export default {
  name: 'order',
  data () {
    return {
      list: []
    }
  },
  components: {
    'v-search': search,
    'v-discover': discover
  },
  methods: {
    testAjax: function () {
      this.$http.get('api/test/user').then(function (res) { // then 表示异步请求数据
        console.info(res.data.rows)
        this.list = res.data.rows
      })
    }
  }
}
</script>

<style scoped>
#order{
  height: auto;
}
.disabled-1{
  padding-top: 20px;
  margin-top: 0;
}
.order-btn-group{
  padding-top: 10px;
}
</style>
