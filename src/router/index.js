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
const Report = () =>
    import ( /* webpackChunkName: "users_rights-roles" */ '@/views/Report/index.vue')

const paySession = () =>
    import ( /* webpackChunkName: "users_rights-roles" */ '@/components/paySession/index.vue')

// import Cate from '@/components/goods/Cate'
const paySetting = () =>
    import ( /* webpackChunkName: "cate_params" */ '@/views/paySetting/index.vue')
    // import Params from '@/components/goods/Params'
const userLevel = () =>
    import ( /* webpackChunkName: "cate_params" */ '@/views/userLevel/index.vue')

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
const suggestion = () =>
    import ( /* webpackChunkName: "order_report" */ '@/views/suggestion/index.vue')
const PaymentStatistics = () =>
    import ( /* webpackChunkName: "order_report" */ '@/views/PaymentStatistics/index.vue')
const cartoonPay = () =>
    import ( /* webpackChunkName: "order_report" */ '@/views/cartoonPay/index.vue')
const Advertisement = () =>
    import ( /* webpackChunkName: "order_report" */ '@/views/Advertisement/index.vue')
const PayList = () =>
    import ( /* webpackChunkName: "order_report" */ '@/views/PayList/index.vue')
const AuthorityList= () =>
    import ( /* webpackChunkName: "order_report" */ '@/views/AuthorityList/index.vue')
const echars= () =>
    import ( /* webpackChunkName: "order_report" */ '@/views/Charts/LineMarker.vue')    
const AuthoUserList= () =>
    import ( /* webpackChunkName: "order_report" */ '@/views/AuthoUserList/index.vue')    
const Banner= () =>
    import ( /* webpackChunkName: "order_report" */ '@/views/CartonAuthority/Banner/index.vue')   
const BookManagement= () =>
    import ( /* webpackChunkName: "order_report" */ '@/views/CartonAuthority/BookManagement/index.vue')
const Advertising= () =>
    import ( /* webpackChunkName: "order_report" */ '@/views/CartonAuthority/Advertising/index.vue')
const Cartonclassify= () =>
    import ( /* webpackChunkName: "order_report" */ '@/views/CartonAuthority/Cartonclassify/index.vue')
const CartonList= () =>
    import ( /* webpackChunkName: "order_report" */ '@/views/CartonAuthority/CartonList/index.vue')
const ChapterCost= () =>
    import ( /* webpackChunkName: "order_report" */ '@/views/CartonAuthority/ChapterCost/index.vue')
const GlobalPopup= () =>
    import ( /* webpackChunkName: "order_report" */ '@/views/CartonAuthority/GlobalPopup/index.vue')
const HomeOne= () =>
    import ( /* webpackChunkName: "order_report" */ '@/views/CartonAuthority/HomeOne/index.vue')
const HomeRecommend= () =>
    import ( /* webpackChunkName: "order_report" */ '@/views/CartonAuthority/HomeRecommend/index.vue')
const PopularizationPlan= () =>
    import ( /* webpackChunkName: "order_report" */ '@/views/CartonAuthority/PopularizationPlan/index.vue')
const SignPush= () =>
    import ( /* webpackChunkName: "order_report" */ '@/views/CartonAuthority/SignPush/index.vue')
const SignSetting= () =>
    import ( /* webpackChunkName: "order_report" */ '@/views/CartonAuthority/SignSetting/index.vue')




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
                    { path: '/Report', component: Report },
                    { path: '/paySetting', component: paySetting },
                    { path: '/userLevel', component: userLevel },
                    { path: '/goods', component: List },
                    { path: '/userList', component: userList },
                    { path: '/userTotal', component: userTotal },
                    { path: '/paySession', component: paySession },
                    { path: '/fastApp', component: fastApp },
                    { path: '/suggestion',component:suggestion},
                    { path: '/PaymentStatistics',component:PaymentStatistics},
                    { path:'/cartoonPay',component:cartoonPay},
                    { path:'/Advertisement',component:Advertisement},
                    { path:'/PayList',component:PayList},
                    { path:'/AuthorityList',component:AuthorityList},
                    { path:'/echars',component:echars},
                    { path:'/AuthoUserList',component:AuthoUserList},
                    { path:'/Banner',component:Banner},
                    { path:'/BookManagement',component:BookManagement},
                    { path:'/Advertising',component:Advertising},
                    { path:'/Cartonclassify',component:Cartonclassify},
                    { path:'/CartonList',component:CartonList},
                    { path:'/ChapterCost',component:ChapterCost},
                    { path:'/GlobalPopup',component:GlobalPopup},
                    { path:'/HomeRecommend',component:HomeRecommend},
                    { path:'/PopularizationPlan',component:PopularizationPlan},
                    { path:'/SignPush',component:SignPush},
                    { path:'/SignSetting',component:SignSetting},
                    { path:'/HomeOne',component:HomeOne}
                    

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