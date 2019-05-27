<template>
    <div class="root-person">
      <div class="header-person">
        <b-card no-body
                style="max-width: 10rem"
                img-src="https://placekitten.com/380/200"
                img-alt="Image"
                img-top
                class="m-auto">
          <b-card-body>
            <h3>ho</h3>
          </b-card-body>
        </b-card>
      </div>
      <el-container>
        <el-main>
          <mt-cell title="标题文字" icon="more" value="带 icon"></mt-cell>
          <mt-cell title="标题文字" icon="more" value="带 icon"></mt-cell>
          <mt-cell title="标题文字" icon="more" value="带 icon"></mt-cell>
          <mt-cell title="标题文字" icon="more" value="带 icon"></mt-cell>
          <mt-cell title="标题文字" icon="more" value="带 icon"></mt-cell>
          <mt-cell title="标题文字" icon="more" value="带 icon"></mt-cell>
        </el-main>
        <el-footer>
          <router-link to="/">
            <mt-button type="info" size="large">退出</mt-button>
          </router-link>
        </el-footer>
      </el-container>
    </div>
</template>

<script>
export default {
  name: 'person'
}
</script>

<style scoped>
  .root-person{
    height: auto;
    width: 100%;
  }
  .el-container{
    height: 100vh;
    width: 100%;
  }
  .header-person{
    background-image:linear-gradient(to bottom, #87d8ff, #f597ff, #c380ff);
    color: #333;
    text-align: center;
    line-height: 60px;
    height: 200px;
    width: 100%;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
    height: 300px;
  }
</style>
