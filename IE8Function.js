/***** 解决IE8不支持forEach方法 *****/
if (typeof Array.prototype.forEach != 'function') {
    Array.prototype.forEach = function(callback){
        for (var i = 0; i < this.length; i++){
            callback.apply(this, [this[i], i, this]);
        }
    };
}

/***** 解决IE8下不支持filter方法 *****/
if (!Array.prototype.filter){
    Array.prototype.filter = function(fun){
        "use strict";
        if (this === void 0 || this === null)
        throw new TypeError();
        var t = Object(this);
        var len = t.length >>> 0;
        if (typeof fun !== "function")
        throw new TypeError();
        var res = [];
        var thisp = arguments[1];
        for (var i = 0; i < len; i++){
            if (i in t){
                var val = t[i]; // in case fun mutates this
                if (fun.call(thisp, val, i, t))
                res.push(val);
            }
        }
        return res;
    };
}

/***** 解决IE8下不支持indexOf方法 *****/
//添加数组IndexOf方法
if (!Array.prototype.indexOf){
    Array.prototype.indexOf = function(elt){
        var len = this.length >>> 0;
        var from = Number(arguments[1]) || 0;
        from = (from < 0) ? Math.ceil(from) : Math.floor(from);
        if (from < 0){
            from += len;
        }
        for (; from < len; from++){
            if (from in this && this[from] === elt)
            return from;
        }
        return -1;
    };
}