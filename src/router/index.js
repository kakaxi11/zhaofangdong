import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '@/components/Login'
const Login = () =>
    import ( /* webpackChunkName: "login_home_welcome" */ '@/components/Login')
    // import Home from '@/components/Home'
const Home = () =>
    import ( /* webpackChunkName: "login_home_welcome" */ '@/components/Home')
    // import Welcome from '@/components/Welcome'
const Welcome = () =>
    import ( /* webpackChunkName: "login_home_welcome" */ '@/components/Welcome')
// import Users from '@/components/user/Users'
const shares = () =>
    import ( /* webpackChunkName: "login_home_welcome" */ '@/Views/Shares/index.vue')
const HoldShares = () =>
    import ( /* webpackChunkName: "login_home_welcome" */ '@/Views/HoldShares/index.vue')


Vue.use(VueRouter)
const router = new VueRouter({
        routes: [
            { path: '/', redirect: '/login' },
            { path: '/login', component: Login },
            {
                path: '/home',
                component: Home,
                redirect: '/welcome',
                children: [
                    { path: '/welcome', component: Welcome },
                    { path: '/shares', component: shares},
                    { path: '/HoldShares', component: HoldShares}
                ]
            }
        ]
    })
    // 挂载路由导航守卫
    router.beforeEach((to, from, next) => {
      //to表示要访问的路径
      //from表示从哪个路径跳转而来
      //next()是一个函数表示放行
      //next() 放行next('/login') 强制跳转
      if (to.path === '/login') return next()
      //如果不是登录页面,则先获取token,若没有则跳回login页面。
      const tokenStr = window.sessionStorage.getItem('token')
      if (!tokenStr) return next('/login')
      next()
    })
export default router