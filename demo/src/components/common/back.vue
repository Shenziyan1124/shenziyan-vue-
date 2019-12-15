<template>
  <div>
    <div class="back iconfont icon-fanhui" @click="go"></div>
  </div>
</template>
<script>
export default {
  methods: {
    go() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped >
.back {
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background: orange;
  line-height: 0.8rem;
  /* position: fixed;
  left: 0.2rem;
  top: 0.2rem; */
}
.iconfont {
  font-size: 0.5rem;
  text-align: center;
}
</style>