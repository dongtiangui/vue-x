<template>
 <div>
   <mt-navbar class="mt-navbar" v-model="selected">
     <mt-tab-item id="activity">活动</mt-tab-item>
     <mt-tab-item id="new-shop">新品</mt-tab-item>
     <mt-tab-item id="dynamic-fashion">时尚动态</mt-tab-item>
  </mt-navbar>
   <!-- tab-container -->
   <mt-tab-container v-model="selected">
     <mt-tab-container-item id="activity">
       <b-list-group>
         <b-list-group-item v-for="item in list" v-bind:key="item.id" v-text="item.text" class="d-flex justify-content-between align-items-center">
           <b-badge variant="primary" pill>14</b-badge>
         </b-list-group-item>
       </b-list-group>
     </mt-tab-container-item>
     <mt-tab-container-item id="new-shop">

       <b-list-group>
         <b-list-group-item class="d-flex justify-content-between align-items-center">
           Cras justo odio
           <b-badge variant="primary" pill>14</b-badge>
         </b-list-group-item>

         <b-list-group-item class="d-flex justify-content-between align-items-center">
           Dapibus ac facilisis in
           <b-badge variant="primary" pill>2</b-badge>
         </b-list-group-item>

         <b-list-group-item class="d-flex justify-content-between align-items-center">
           Morbi leo risus
           <b-badge variant="primary" pill>1</b-badge>
         </b-list-group-item>
       </b-list-group>
     </mt-tab-container-item>
     <mt-tab-container-item id="dynamic-fashion">

       <b-list-group>
         <b-list-group-item class="d-flex justify-content-between align-items-center">
           Cras justo odio
           <b-badge variant="primary" pill>14</b-badge>
         </b-list-group-item>

         <b-list-group-item class="d-flex justify-content-between align-items-center">
           Dapibus ac facilisis in
           <b-badge variant="primary" pill>2</b-badge>
         </b-list-group-item>

         <b-list-group-item class="d-flex justify-content-between align-items-center">
           Morbi leo risus
           <b-badge variant="primary" pill>1</b-badge>
         </b-list-group-item>
       </b-list-group>
     </mt-tab-container-item>
   </mt-tab-container>
 </div>
</template>

<script>
export default {
  name: 'discover',
  data () {
    return {
      selected: 'activity',
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
  }
}
</script>

<style scoped>
.mt-tab-item{
  font-size: 3em!important;
}
.mt-navbar a{
  border-bottom: #42b983 solid 2px;
}
.mt-navbar a:hover{
  border-bottom: red solid 2px;
}
</style>
