import Vue from 'vue'
import Router from 'vue-router'


import index from "../pages/index.vue";
import movie from "../pages/movie.vue";
import movieDetail from "../pages/movieDetail.vue";
import food from "../pages/food.vue";
import foodDetail from "../pages/foodDetail.vue";

import home from "../pages/home.vue";
import order from "../pages/order.vue";
import mine from "../pages/mine.vue";




Vue.use(Router)

export default new Router({
  routes: [{
      path: "/index",
      component: index,
      children: [
        {
           path:"home",
           component:home
        },
        {
          path:"order",
          component:order
        },
        {
          path:"mine",
          component:mine
        },
        {
          path:"",
          redirect:"home"
        }
    ]
    },
    {
      path: "/movie",
      component: movie
    },
    {
      path: "/movieDetail",
      component: movieDetail
    },
    {
      path: "/food",
      component: food
    },
    {
      path: "/foodDetail",
      component: foodDetail
    },
    {
      path: "*",
      redirect: "/index"
    }
  ]
})
