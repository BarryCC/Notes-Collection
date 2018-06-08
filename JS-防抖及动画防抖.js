/*********** 防抖 ***********/
function debounce (func, timeWait, immediate) {
	var timeout, result;
	return function () {
		var context = this;  //使this正确指向
		var args = arguments;  //处理事件对象event
		if (timeout) clearTimeout(timeout);
		if(immediate) {
			//如果已经执行过，不在执行
			var callNow = !timeout;
			timeout = setTimeout(function() {
				timeout = null;
			}, timeWait);
			if (callNow) result = func.apply(context, args);
		} else {
			timeout = setTimeout(function() {
				func.apply(context, args);
			},timeWait);
		}
		return result;
	}
}
 
//动画防抖：
function debounce(func) {
	var timeout;
	return function () {
		cancelAnimationFrame(timeout)
		t = requestAnimationFrame(func);
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
var e = document.getElementById("e");
var flag = true;
var left = 0;
function render() {
    left == 0 ? flag = true : left == 100 ? flag = false : '';
    flag ? e.style.left = ` ${left++}px`:
        e.style.left = ` ${left--}px`;
}
(function animloop() {
    render();
    requestAnimFrame(animloop);
})();