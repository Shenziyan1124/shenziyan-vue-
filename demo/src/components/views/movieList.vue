<template>
  <div>
    <div v-for="item in list" :key="item.id" class="list" @click="toDetail(item.id)">
      <h3>{{item.name}}</h3>
      <h6>{{item.yanyuan}}</h6>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    list: Array
  },
  methods: {
    toDetail(id){
      // console.log(id)
      this.$router.push("/movieDetail?id="+id)
    }
  },
};
</script>
<style scoped >
.list {
  width:100%;
  text-align: center;
  border-top: 1px solid #000;
  background: #ccc;
  margin: .1rem 0;
}
.list h3,h6{
  font-size: 0.3rem;
  line-height: 0.5rem;
  padding: .1rem;
}
</style>