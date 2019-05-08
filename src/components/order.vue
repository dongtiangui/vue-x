<template>
  <div id="order">
      <v-search></v-search>
      <div class="order-btn-group">
        <b-button-group>
          <b-button variant="info">
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
      <v-discover class="disabled-1"></v-discover>
  </div>
</template>

<script>
import search from '../components/search'
import discover from '../components/discover'
export default {
  name: 'order',
  components: {
    'v-search': search,
    'v-discover': discover
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
