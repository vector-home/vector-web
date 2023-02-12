
let timeout = null 
let canRun = true;
//防抖动
export function debounce(fn) {
	return function() {
		clearTimeout(timeout) 
		timeout = setTimeout(() => {  
			fn.apply(this, arguments)
		}, 2000)
	}
}

//第一个参数：函数 第二个参数：定时多久时间函数不可调用
export function throttle(fn, wait) {
	var pre = Date.now();
	return function() {
		var context = this;
		var args = arguments;
		var now = Date.now();
		if (now - pre >= wait) {
			fn.apply(context, args);
			pre = Date.now();
		}
	}
}
