<template>
  <div>
    <ul class="list-unstyled">
      <b-media tag="li" class="b-media" right-align vertical-align="center">
        <b-img slot="aside" blank blank-color="#abc" width="96" alt="placeholder"></b-img>
        <h5 class="mt-0 mb-1">商品名称</h5>
        <p class="mb-0">
         商品介绍
        </p>
      </b-media>
      <b-media tag="li" class="b-media" right-align vertical-align="center">
        <b-img slot="aside" blank blank-color="#cba" width="96" alt="placeholder"></b-img>

        <h5 class="mt-0 mb-1">商品名称</h5>
        <p class="mb-0">
          商品介绍
        </p>
      </b-media>

      <b-media tag="li" class="b-media" right-align vertical-align="center">
        <b-img slot="aside" blank blank-color="#bac" width="96" alt="placeholder"></b-img>

        <h5 class="mt-0 mb-1">商品名称</h5>
        <p class="mb-0">
          商品介绍
        </p>
      </b-media>
      <b-media tag="li" class="b-media" right-align vertical-align="center">
        <b-img slot="aside" blank blank-color="#bac" width="96" alt="placeholder"></b-img>

        <h5 class="mt-0 mb-1">商品名称</h5>
        <p class="mb-0">
          商品介绍
        </p>
      </b-media>
      <b-media tag="li" class="b-media" right-align vertical-align="center">
        <b-img slot="aside" blank blank-color="#bac" width="96" alt="placeholder"></b-img>

        <h5 class="mt-0 mb-1">商品名称</h5>
        <p class="mb-0">
          商品介绍
        </p>
      </b-media>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'discover'
}
</script>

<style scoped>
.list-unstyled{
  background-color: white !important;
}
.list-unstyled .b-media:nth-child(1){
  border-top: #42b983 solid 2px;
}
.list-unstyled .b-media{
  box-shadow: 1px 2px 1px #fff6;
  padding-top: 10px;
  border-bottom: #42b983 solid 2px;
}

</style>
