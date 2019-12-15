<template>
  <div>
    <div class="back" @click="go"></div>
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
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: orange;
  position: fixed;
  left: 0.2rem;
  top: 0.2rem;
}
</style>