
import modal from '@/plugins/modal'
import cache from '@/plugins/cache'

export default function installPlugins(app){
    // 缓存对象
    app.config.globalProperties.$cache = cache
    // 模态框对象
    app.config.globalProperties.$modal = modal
}

