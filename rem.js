/******************* 暂没弄明白 ******************* */

(function(doc, win) {
    var docEl = doc.documentElement || document.body,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            //docEl.style.fontSize = (f>=750) ? "100px":100*(f/750)+"px";
            docEl.style.fontSize = 32 * (clientWidth / 320) + 'px';
        };
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);


(function flexible (win, doc) {
    var docEl = doc.documentElement;
    var dpr = win.devicePixelRatio || 1;
    
    // adjust body font size
    function setBodyFontSize() {
        if(doc.body) {
            doc.body.style.fontSize = (12 * dpr) + 'px';
        }else{
            doc.addEventListener('DOMContentLoaded', setBodyFontSize);
        }
    }
    setBodyFontSize();

    // set 1rem = viewWidth / 10;
    function setRemUnit() {
        var rem = docEl.clientWidth / 10;
        docEl.style.fontSize = rem + 'px';
    }
    setRemUnit();
    // reset rem unit on page resize
    win.addEventListener('resize', setRemUnit);
    window.addEventListener('pageshow', function(e) {
        if(e.persisted) {
            setRemUnit();
        }
    });

    // detect 0.5px suports  ???
    if(dpr >= 2) {
        var fakeBody = doc.createElement('body');
        var testElement = doc.createElement('div');
        testElement.style.border = '0.5px solid transparent';
        fakeBody.appendChild(testElement);
        docEl.appendChild(fakeBody);
        if(testElement.offsetHeight === 1) {
            docEl.classList.add('');
        }
        docEl.removeChild(fakeBody);
    }
})(window, document);