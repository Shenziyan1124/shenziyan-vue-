<template>
 <div>
   
     <router-link to="/movie">电影</router-link>
     <span @click="$router.push('/food')">外卖</span>
 </div>
</template>
<script>
// import API from "../common/js/API"
export default {
}
</script>
<style scoped >
a,span{
    font-size: .5rem;
    padding: .1rem .3rem;
}
</style>