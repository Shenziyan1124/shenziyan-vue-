<template>
  <div>
    <span class="movie-title">电影列表</span>
    <vBack></vBack>
    <!-- <div v-for="item in list" :key="item.id">
          <h3>{{item.name}}</h3>
    </div>-->
    <vMovie :list="list"></vMovie>
  </div>
</template>
<script>
// import API from "../common/js/API"
import vMovie from "../components/views/movieList";
export default {
  data() {
    return {
      list: [
        {
          id: "1",
          name: "我和我的祖国",
          yanyuan: "杨幂，王大陆，郑爽"
        },
        {
          id: "2",
          name: "老炮儿",
          yanyuan: "杨幂，王大陆，郑爽"
        },
        {
          id: "3",
          name: "无问西东",
          yanyuan: "杨幂，王大陆，郑爽"
        },
        {
          id: "4",
          name: "中国机长",
          yanyuan: "杨幂，王大陆，郑爽"
        },
        {
          id: "5",
          name: "肖生克的救赎",
          yanyuan: "杨幂，王大陆，郑爽"
        }
      ]
    };
  },
  components: {
    vMovie
  }
};
</script>
<style scoped>
.movie-title {
  width: 100vw;
  font-size: 0.5rem;
  display: inline-block;
  text-align: center;
  color: darkcyan;
  padding: 0.1rem 0 0.2rem 0;
}
</style>