/*********** 去抖debounce 去抖就是对于一定时间段的连续的函数调用，只让其执行一次 ***********/
// 应用：每次 resize/scroll 触发统计事件文本输入的验证等
function debounce (func, timeWait) {
	var timeout, result;
	return function () {
		var context = this, //使this正确指向
			args = arguments;  //处理事件对象event
		if (timeout) {
			clearTimeout(timeout);
			timeout = null;
		}
		timeout = setTimeout(function() {
			func.apply(context, args);
		}, timeWait);
		return result;
	}
}
 
//动画防抖：
function debounce(func) {
	var timeout;
	return function () {
		cancelAnimationFrame(timeout)
		timeout = requestAnimationFrame(func);
	}
}

//eg：JS实现连续动画
//兼容性处理
window.requestAnimFrame = (function() {
	return  window.requestAnimationFrame || 
	window.webkitRequestAnimationFrame || 
	window.mozRequestAnimationFrame ||
	function(callback){
		window.setTimeout(callback, 1000 / 60);
	};
})();
function animloop() {
	/*** coding ***/
    requestAnimFrame(animloop);
};