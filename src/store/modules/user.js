import { getToken, setToken, removeToken } from '../../plugins/cookies'

const user = {
    state: {
        token: getToken(),
        userInfo: {
            
        }
    },
    mutations: {

    },
    actions: {

    },
    getters: {
        token: state => state.token,
        userInfo: state => state.userInfo,
    }
}

export default user