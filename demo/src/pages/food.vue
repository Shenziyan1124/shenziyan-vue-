<template>
  <div>
    <vBack></vBack>
    <div v-for="item in fooDlist" :key="item.id" @click="toFood(item.id)">
      <h3>{{item.name}}</h3>
    </div>

    <!-- <vMovie :list="fooDlist"></vMovie> -->
  </div>
</template>
<script>
// import API from "../common/js/API"
import vMovie from "../components/views/movieList";
export default {
  data() {
    return {
      fooDlist: [
        {
          id: "1",
          name: "麻辣烫"
        },
        {
          id: "2",
          name: "麻辣拌"
        },
        {
          id: "3",
          name: "麻辣香锅"
        },
        {
          id: "4",
          name: "多喝烫水"
        }
      ]
    };
  },
  methods: {
    toFood(id) {
      this.$router.push("/foodDetail?id=" + id);
    }
  },
  components: {
    vMovie
  }
};
</script>
<style scoped >
</style>