import request from "../utils/request"

export function postAction(url,params,isToken){
	return request({
		url:url,
		method:"post",
		data:params,
		header: {
		    isToken: isToken
		},
	})
}

export function getAction(url,params,isToken) {
    return request({
        url: url,
        method: 'get',
		data:params,
		header: {
		    isToken: isToken
		},
    })
}

export function patchAction(url,params,isToken) {
    return request({
        url: url,
        method: 'patch',
		data:params,
		header: {
		    isToken: isToken
		},
    })
}

export function deleteAction(url, parameter,isToken) {
    return request({
        url: url,
        method: 'delete',
        data: parameter,
		header: {
		    isToken: isToken
		},
    })
}

export function putAction(url, parameter,isToken) {
    return request({
        url: url,
        method: 'put',
        data: parameter,
		header: {
		    isToken: isToken
		},
    })
}