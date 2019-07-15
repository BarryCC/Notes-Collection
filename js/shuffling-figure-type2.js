(function(){
        var box = document.getElementById('mp-banner');
        var ul = document.getElementById('mpList');
        var li = ul.getElementsByTagName('li');
        var len = li.length;
        var dots = document.getElementById('dots');
        var dot = dots.getElementsByTagName('a');
        var arr = [];
        for(var i = 0; i < len; i++){
            var item = li[i];
            arr.push({
                top : parseInt(css(item, 'top')),
                left : parseInt(css(item, 'left')),
                width : parseInt(css(item, 'width')),
                height : parseInt(css(item, 'height')),
                zIndex : parseInt(css(item, 'zIndex'))
            });
            dot[i].index = i;
            dot[i].onmouseover = function(){
                scroll(this.index);
            }
        }
        function scroll(n){
            tab(n);
            var ret = center(n, arr.slice(0));
            for(var i = 0; i < len; i++){
                li[i].style.zIndex = ret[i].zIndex;
                act(li[i], ret[i]);
            }
        }
        function tab(n){
            for(var i = 0; i < len; i++){
                dot[i].className = 'dot';
            }
            dot[n].className += ' dot-active';
        }
        function center(n, arr){
            n -= Math.floor(arr.length / 2);//下舍入
            for(var i = 0; i < Math.abs(n); i++){//返回绝对值
                if(n > 0){
                    arr.push(arr.shift());//用于把数组的第一个元素从其中删除，并返回第一个元素的值。
                } else {
                    arr.unshift(arr.pop());//删除并返回数组的最后一个元素
                }
            }
            return arr;
        }
        function css(obj, attr){
            if(obj.currentStyle){
                return obj.currentStyle[attr];
            } else {
                return getComputedStyle(obj, false)[attr];
            }
        }
        function act(obj, json, fn){
            clearInterval(obj.timer);
            obj.timer = setInterval(function(){
                var stop = true;
                for(var attr in json){
                    var target = json[attr];
                    var cur = parseInt(css(obj, attr));
                    var speed = (target - cur) / 8;
                    speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                    if(target != cur){
                        stop = false;
                    }
                    cur += speed;
                    obj.style[attr] = cur + 'px';
                }
                if(stop){
                    clearInterval(obj.timer);
                    obj.timer = null;
                    fn && fn();
                }
            }, 30);
        }

    }());