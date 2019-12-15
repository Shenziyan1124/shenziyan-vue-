<template>
  <div>
    <vBack></vBack>
    电影详情{{detailId}}
  </div>
</template>
<script>
// import API from "../common/js/API"
export default {
  data() {
    return {
      detailId: ""
    };
  },
  mounted() {
    this.detailId = this.$route.query.id;
    // console.log(this.$route.query.id);
  }
};
</script>
<style scoped >
</style>