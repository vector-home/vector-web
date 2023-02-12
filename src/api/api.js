import { postAction, deleteAction, getAction, putAction, patchAction } from "./manage";
import api from './index.js'
import store from "../store/main";



//测试
export function test() {
	return new Promise(resolve => {
		getAction(api.test, '', "false").then((res) => {
			resolve(res)
		})
	})
}
