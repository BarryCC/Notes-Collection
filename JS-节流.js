/*********** 节流 throttle 让一个函数不要执行的太频繁，减少执行过快的调用，叫节流 ***********/

//在返回的匿名函数中调用
    context = this;
    args = arguments;
    func.apply(context, args)
// 原因？

// 1、使用时间戳，当触发事件的时候，我们取出当前的时间戳，然后减去之前的时间戳(最一开始值设为 0 )，
// 如果大于设置的时间周期，就执行函数，然后更新时间戳为当前的时间戳，如果小于，就不执行。
function throttle(func, wait) {
    var context, args;
    var previous = 0;
    return function() {
        var now = +new Date();
        context = this;
        args = arguments;
        if (now - previous > wait) {
            func.apply(context, args);
            previous = now;
        }
    }
}

//2、定时器
function throttle(func, wait) {
    var timeout;
    var previous = 0;
    return function() {
        context = this;
        args = arguments;
        if (!timeout) {
            timeout = setTimeout(function() {
                clearTimeout(timeout)
                timeout = null;
                func.apply(context, args)
            }, wait)
        }
    }
}

// 节流优化 ：
function throttle(func, wait) {
    var timeout, context, args, result;
    var previous = 0;
    var later = function() {
        previous = +new Date();
        timeout = null;
        func.apply(context, args)
    };
    var throttled = function() {
        var now = +new Date();
        //下次触发 func 剩余的时间
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        // 如果没有剩余的时间了或者你改了系统时间
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            func.apply(context, args);
        } else if (!timeout) {
            timeout = setTimeout(later, remaining);
        }
    };
    return throttled;
}