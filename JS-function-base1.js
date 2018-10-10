/*** 取数组中下标对象值，防止数组为空时，取值报错  ***/
function safeProps(func, defaultVal) {
    try {
        return func();
    } catch (e) {
        return defaultVal;
    }
}

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

/*** 获取规范时间 ***/
// var h = now.getHours();
// var m = now.getMinutes();
// var s = now.getSeconds();
function formatDate(date){
    var weeks = ["日","一","二","三","四","五","六"];
    return date.getFullYear() + "年" + (date.getMonth()+1) + "月" + date.getDate() + "日 星期" + weeks[date.getDay()];
}
var date = new Date();
alert(formatDate(date));


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