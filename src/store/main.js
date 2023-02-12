import Vuex from 'vuex'
import user from './modules/user'
import article from './modules/article'
export default new Vuex.Store({
    modules: {
        user,
        article
    }
})
