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
const system = () =>
    import ( /* webpackChunkName: "users_rights-roles" */ '@/components/system/index.vue')
    // import Rights from '@/components/power/Rights'
const Rights = () =>
    import ( /* webpackChunkName: "users_rights-roles" */ '@/components/power/Rights')
    // import Roles from '@/components/power/Roles'
const Roles = () =>
    import ( /* webpackChunkName: "users_rights-roles" */ '@/components/power/Roles')

const paySession = () =>
    import ( /* webpackChunkName: "users_rights-roles" */ '@/components/paySession/index.vue')

// import Cate from '@/components/goods/Cate'
const Cate = () =>
    import ( /* webpackChunkName: "cate_params" */ '@/components/goods/Cate')
    // import Params from '@/components/goods/Params'
const Params = () =>
    import ( /* webpackChunkName: "cate_params" */ '@/components/goods/Params')

// import List from '@/components/goods/List'
const List = () =>
    import ( /* webpackChunkName: "list_add" */ '@/components/goods/List')
    // import Add from '@/components/goods/Add'
const userList = () =>
    import ( /* webpackChunkName: "list_add" */ '@/views/userList/index.vue')

// import Order from '@/components/order/Order'
const userTotal = () =>
    import ( /* webpackChunkName: "order_report" */ '@/views/userTotal/index.vue')
    // import Report from '@/components/report/Report'
const fastApp = () =>
    import ( /* webpackChunkName: "order_report" */ '@/components/fastApp/index.vue')

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
                    { path: '/system', component: system },
                    { path: '/rights', component: Rights },
                    { path: '/roles', component: Roles },
                    { path: '/categories', component: Cate },
                    { path: '/params', component: Params },
                    { path: '/goods', component: List },
                    { path: '/userList', component: userList },
                    { path: '/userTotal', component: userTotal },
                    { path: '/paySession', component: paySession },
                    { path: '/fastApp', component: fastApp }

                ]
            }
        ]
    })
    //挂载路由导航守卫
    // router.beforeEach((to, from, next) => {
    //   //to表示要访问的路径
    //   //from表示从哪个路径跳转而来
    //   //next()是一个函数表示放行
    //   //next() 放行next('/login') 强制跳转
    //   if (to.path === '/login') return next()
    //   const tokenStr = window.sessionStorage.getItem('token')
    //   if (!tokenStr) return next('/login')
    //   next()
    // })

export default router