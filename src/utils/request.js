import axios from 'axios'
import { ElNotification, ElMessage } from 'element-plus'
import { getToken } from '../plugins/cookies'
import router from "../router/main";

// 创建axios实例
const service = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    baseURL: import.meta.env.VITE_APP_BASE_API,
    // 超时
    timeout: 10000
})
// request拦截器
service.interceptors.request.use(config => {
    // console.log(config)
    // 是否需要设置 token
    const isToken = (config.headers || {}).isToken
    if (getToken() && !isToken) {
        config.headers['Authorization'] =getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config
}, error => {
    Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(res => {
    //  console.log(res);
    // 未设置状态码则默认成功状态
    let code = res.status || 200;
    // 获取错误信息
    const msg = res.data.msg || "未知错误信息请联系管理员";
    // 二进制数据则直接返回
    if (res.request.responseType === 'blob' || res.request.responseType === 'arraybuffer') {
        return res.data
    }
    if (code === 401) {

     
        // store.dispatch('LogOut').then(() => {
        //     router.push({ path: '/login' }).then(() => {
        //         isRelogin.show = false;
        //         }).catch(() => {
        //             isRelogin.show = false;
        //         });
        //     })
        
        return Promise.reject('无效的会话，或者会话已过期，请重新登录。')
    } else if (code === 500) {
        ElMessage({
            message: msg,
            type: 'error'
        })
        return Promise.reject(new Error(msg))
    } else if (code === 301 || code === 302) {

        return Promise.resolve(res.data)
    }
    else if (code !== 200) {
        ElNotification.error({
            title: msg
        })
        return Promise.reject('error')
    } else {
        return Promise.resolve(res.data)
    }
},
    error => {
        let { message } = error;
        if (message == "Network Error") {
            message = "后端接口连接异常";
        } else if (message.includes("timeout")) {
            message = "系统接口请求超时";
        } else if (message.includes("Request failed with status code")) {
            message = "系统接口" + message.substr(message.length - 3) + "异常";
        }
        ElMessage({
            message: message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
)

export default service