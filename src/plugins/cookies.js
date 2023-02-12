
// cookies存储token

import Cookies from 'js-cookie'

const TokenKey = 'vector-Token'

export function getToken() {
    return Cookies.get(TokenKey)
}

export function setToken(token) {
    return Cookies.set(TokenKey, token)
}

export function removeToken() {
    //console.log('cookie已删除')
    return Cookies.remove(TokenKey)
}
