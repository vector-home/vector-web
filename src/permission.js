
import router from './router/main'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from './plugins/cookies'

NProgress.configure({ showSpinner: false });
//跳转 一种 重定向
// index.html 判断登录 login.html

const whiteList = ['/login'];// 白名单
//路由守卫
router.beforeEach((to, from, next) => {

    NProgress.start()//进度条插件
    if (getToken()) {
        if (to.path === '/login') {
            next({ path: '/home' })
            // next()
            NProgress.done()//进度条完成
        }
    } else {
        // 没有token
        if (whiteList.indexOf(to.path) !== -1) {
            // 在免登录白名单，直接进入
            next()
        }
        else {
            next()
            // next({ path: "/login" }) // 否则全部重定向到登录页
            NProgress.done()
        }
    }
})

router.afterEach(() => {
    NProgress.done()
})

