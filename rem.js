(function(c,d){
    var e=document.documentElement||document.body,
        a="orientationchange" in window?"orientationchange":"resize",
        b=function(){
            var f=e.clientWidth;
            e.style.fontSize=(f>=750)?"100px":100*(f/750)+"px"
        };
    b();
    c.addEventListener(a,b,false)
})(window);


(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 32 * (clientWidth / 320) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);