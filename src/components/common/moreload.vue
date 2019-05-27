<template lang="html">
  <div class="video-content" :style="{'-webkit-overflow-scrolling': scrollMode}">
    <v-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore" :bottomPullText='bottomText' @bottom-status-change="handleBottomChange">
      <ul>
        <li v-for="(item,index) in companylist" :key="index" class="previvew-cover">

          <p>{{ item }}</p>
        </li>
      </ul>
      <div slot="bottom" class="mint-loadmore-bottom">
        <span v-show="bottomStatus !== 'loading'" :class="{ 'rotate': bottomStatus === 'drop' }">上拉加载更多...</span>
        <span v-show="bottomStatus === 'loading'">
          <font-awesome-icon icon="child" fixed-width></font-awesome-icon>加载中...</span>
      </div>
    </v-loadmore>
  </div>
</template>
<script type="text/javascript">
import axios from 'axios';
import { Loadmore } from 'mint-ui';
import { global_set } from '../../global.js'
import {port} from '../../global'
export default {
    data() {
      return {
        companylist: [],
        comPagesNum: '',
        comMark: '',
        pageNo: 1,
        comTotal: '',
        bottomText: '',
        allLoaded: false, // 是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了
        scrollMode: "auto", // 移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动
        bottomStatus: '',
        api: {
          comList: global_set+':'+port+ "/trends/ajaxTrends/table",
        }
      }
    },
    components: {
      'v-loadmore': Loadmore, // 为组件起别名，vue转换template标签时不会区分大小写，例如：loadMore这种标签转换完就会变成loadmore，容易出现一些匹配问题

    },
    mounted() {
      //初次访问查询数据列表
      this.comInitData();
    },
    methods: {
      comInitData: function() {
        axios.get(this.api.comList, {
          params: {
            pageNum:this.pageNo,
            pageSize: 5
          }
        })
          .then((data) => {
            this.companylist = data.data.rows;
            this.comMark = 0;
            this.comTotal = data.data.total;
            this.comPagesNum = data.data.pages;
          })
          .catch(function(err) {
            console.log(err);
          })
      },

      loadBottom: function() {
        if(this.comTotal > 10) {
          let u = navigator.userAgent;
          let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
          setTimeout(() => {
            // 分页查询
            this.pageNo += 1;
            if(this.pageNo <= this.comPagesNum) {
              axios.get(this.api.comList, {
                params: {
                  pageNum: this.pageNo,
                  pageSize: 5
                }
              })
                .then((data) => {
                  this.companylist = this.companylist.concat(data.data.rows);
                  this.isHaveMore(data.data.hasNextPage);  // 上拉判断是否还有下一页数据要加载
                })
                .catch(function(err) {
                  console.log(err);
                });
              this.$refs.loadmore.onBottomLoaded(); // 固定方法，查询完要调用一次，用于重新定位。
              if(isiOS === true) {
                this.scrollMode = "touch";
              }
            }
          }, 1000);
        } else {
          this.allLoaded = true;
          $('.mint-loadmore-bottom').html('亲，已经到底了哦！');
          setTimeout(() => {
            $('.mint-loadmore-content').css({
              'transform': 'translate3d(0, 0, 0)'
            });
          }, 500)
        }
      },
      handleBottomChange(status) {
        this.bottomStatus = status; // 上拉状态变换
      },
      isHaveMore: function(isHaveMore) { // 是否还有下一页，如果没有就禁止上拉刷新
        this.allLoaded = true; // true是禁止上拉加载
        if(isHaveMore === true) {
          this.allLoaded = false;
        }
      }
    }
  }
</script>

