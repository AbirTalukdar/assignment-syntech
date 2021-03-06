import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
        path: "/create",
        component: require('./components/Create.vue'),
        meta:{
            forVisitors: true
        }
    },
    {
        path:"/list",
        component: require('./components/List.vue'),
        meta:{
            forVisitors: true
        }
    }

    /*{
      path: "/login",
      component: require('./components/authentication/Login.vue'),
      meta: {
        forVisitors: true
      }
    },
    {
      path: "/register",
      component: require('./components/authentication/Register.vue'),
      meta: {
        forVisitors: true
      }
    },
    {
      path: "/feed",
      component: require('./components/Feed.vue'),
      meta: {
        forAuth: true
      }
    },
    ,
    {
      path: "/products/create",
      component: require('./components/product/Create.vue'),
      meta: {
        forAuth: true
      }
    },
    {
      path: "/products/:product/edit",
      component: require('./components/product/Edit.vue'),
      meta: {
        forAuth: true
      }
    }*/
  ],
  linkActiveClass: 'active'
})

export default router