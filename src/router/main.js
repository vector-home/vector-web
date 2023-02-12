import { createRouter, createWebHashHistory } from "vue-router"

const routes = [

    {
        path: '/',
        name: '/',
        redirect: '/Index'
    }, {
        path: "/index",
        name: "Index",
        component: () => import("../pages/Index.vue"),
        meta: {
            title: "首页"
        }
    }, {
        path: "/login",
        name: "Login",
        component: () => import("../pages/user/login.vue"),
        meta: {
            title: "登录"
        }
    }, {
        path: "/usercenter",
        name: "UserCenter",
        component: () => import("../pages/user/UserCenter.vue"),
        meta: {
            title: "用户中心"
        }
    }, {
        path: "/askquestion",
        name: "AskQuestion",
        component: () => import("../pages/AskQuestion.vue"),
        meta: {
            title: "去提问"
        }
    }, {
        path: "/writearticle",
        name: "WriteArticle",
        component: () => import("../pages/WriteArticle.vue"),
        meta: {
            title: "写文章"
        }
    }

]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router