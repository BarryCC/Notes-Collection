/*** 阻止默认行为和冒泡 兼容性 ***/
event = event || window.event;
if(event.preventDefault || event.stopPropagation){
    //w3c
    event.preventDefault();
    event.stopPropagation();
} else {
    //IE
    event.returnValue = false;
    event.cancelBubble = true;
}


/*** 数组排序 ***/
// 升序
arr.sort(function(a, b){
    return a-b;
});
// 降序
arr.sort(function(a, b){
    return b-a;
});


/*** 时间戳、毫秒格式化 ， 当前日期 ***/
function formatDate(now) {
    var y = now.getFullYear();
    var m = now.getMonth() + 1; // 注意 JavaScript 月份+1
    var d = now.getDate();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
    return y + "-" + m + "-" + d + " " + h + ":" + m + ":" + s;
}
var nowDate = new Date(1442978789184);
alert(formatDate(nowDate));

/*** 获取规范时间 ***/
var calculateDate = function(){
    var date = new Date();
    var weeks = ["日","一","二","三","四","五","六"];
    return date.getFullYear()+"年"+(date.getMonth()+1)+"月"+
    date.getDate()+"日 星期"+weeks[date.getDay()];
}


/*** 检测浏览器是否支持SVG和canvas ***/
function isSupportSVG() {
    var SVG_NS = 'http://www.w3.org/2000/svg';
    return !!document.createElementNS &&!!document.createElementNS(SVG_NS, 'svg').createSVGRect;
}
function isSupportCanvas() {
    if(document.createElement('canvas').getContext){
        return true;
    }else{
        return false;
    }
}

/*** 检测是否是微信 ***/
function isWeiXinClient() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i)=="micromessenger") {
        return true;
    } else {
        return false;
    }
}

/*** 检测是否移动端及浏览器内核 ***/
//方法
var browser = {
    versions: function() {
        var u = navigator.userAgent;
        return {
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Firefox') > -1, //火狐内核Gecko
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否移动终端
            ios: !!u.match(/(i[^;]+;( U;)? CPU.+Mac OS X/), //ios
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android
            iPhone: u.indexOf('iPhone') > -1 , //iPhone
            iPad: u.indexOf('iPad') > -1, //iPad
            webApp: u.indexOf('Safari') > -1 //Safari
        };
    }
}
//使用
if (browser.versions.mobile() || browser.versions.ios() || browser.versions.android() || browser.versions.iPhone() || browser.versions.iPad()) {
    alert('移动端');
}