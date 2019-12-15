<template>
 <div>
     <router-view></router-view>
     <vNav></vNav>
 </div>
</template>
<script>
// import API from "../common/js/API"
import vNav from "../components/views/nav"
export default {
  components:{
    vNav
  }
}
</script>
<style scoped>


</style>