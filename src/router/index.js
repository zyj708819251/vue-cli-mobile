import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: () => import('@views/Home/Home.vue'),
    redirect: '/Home/Person',
    meta: {
      isLogin: true
    },
    children: [{
        path: '/Home/Person',
        name: 'Person',
        component: () => import('@views/Home/Person.vue'),
        meta: {
          isLogin: true
        },
      },
      {
        path: '/Home/Search',
        name: 'Search',
        component: () => import('@views/Home/Search.vue'),
        meta: {
          isLogin: true
        },
      }
    ]
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('@views/Login.vue'),
    meta: {
      isLogin: false
    },
  },
  {
    path: '/Set',
    name: 'Set',
    component: () => import('@views/Set.vue'),
    meta: {
      isLogin: false
    },
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 路由守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  if (to.meta.isLogin) { //判断是否需要登录
    if (to.path == '/Login') {
      next();
    } else {
      let token = store.state.user;
      console.log(token)
      if (token == null || token == '' || token == undefined) {
        next('/Login');
      } else {
        next();
      }
    }
  } else {
    next();
  }
});
export default router
