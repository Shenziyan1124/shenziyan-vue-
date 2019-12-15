<template>
     <footer class="footer">
       <router-link to="/index/home" active-class="active">首页</router-link>
       <router-link to="/index/order" active-class="active">订单</router-link>
       <router-link to="/index/mine" active-class="active">我的</router-link>
     </footer>
</template>
<script>

export default {
}
</script>
<style scoped >
.footer{
  width: 100vw;
  height: .8rem;
  position: fixed;
  left: 0;
  bottom: 0;
  background: #ccc;
  display: flex;
  text-align: center;
  line-height: .8rem;
  font-size: .3rem;
}
.footer a{
  flex: 1;
}
.active{
  background: orange;
}
</style>