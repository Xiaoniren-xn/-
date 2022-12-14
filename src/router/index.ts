import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Index from '../views/index.vue'
// import Home from "../views/RouterPage/Home/index.vue"
import component from "*.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/index',
        name: '首页',
        component: Index,
        children: [
            {
                path: '/home',
                name: '首页',
                component: () => import("../views/RouterPage/Home/index.vue")
            },
            {
                path: '/UserList',
                name: '用户列表',
                component: () => import("../views/RouterPage/UserControl/UserList/index.vue")
            },
            {
                path: '/UserInvit',
                name: '邀请记录',
                component: () => import('../views/RouterPage/UserControl/UserInvite/index.vue')
            }, {
                path: '/MillOrder',
                name: '矿机记录',
                component: () => import('../views/RouterPage/OrderControl/MillOrder/index.vue')
            }, {
                path: '/MoneyOrder',
                name: '资金记录',
                component: () => import('../views/RouterPage/OrderControl/MoneyOrder/index.vue')
            }, {
                path: '/BusinessAdmin',
                name: '商家管理',
                component: () => import('../views/RouterPage/OrderControl/BusinessAdmin/index.vue')
            }, {
                path: '/UserWithDrow',
                name: '用户提现',
                component: () => import('../views/RouterPage/WidthDrow/UserWithDrow/index.vue')
            }, {
                path: '/WithDrowControl',
                name: '提现管理',
                component: () => import('../views/RouterPage/WidthDrow/WithDrowControl/index.vue')
            }
            , {
                path: '/UserIdCardCheck',
                name: '实名审核',
                component: () => import('../views/RouterPage/Authentication/UserIdCard.vue')
            }, {
                path: '/ChromAuthentication',
                name: '谷歌验证',
                component: () => import('../views/RouterPage/GooleAuthentication/index.vue')
            }, {
                path: '/ExchangeRateAllcation',
                name: '汇率配置',
                component: () => import('../views/RouterPage/ExchangeRateAllcation/index.vue')
            }, {
                path: '/AppSetting',
                name: 'App配置',
                component: () => import('../views/RouterPage/AppSetting/index.vue')
            }]
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
