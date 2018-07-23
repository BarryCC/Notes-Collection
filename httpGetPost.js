//创建XMLHTTPRequest实例，兼容低版本IE
function creatXHR() {
    if (typeof XMLHTTPRequest != "undefined") {
        return new XMLHTTPRequest();
    } else if (typeof ActiveXObject != "undefined") {
        if (typeof arguments.callee.activeXString != "string") {
            let versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp"];
            let i,
                len;
            for (i=0,len = versions.length; i < len; i++) {
                try {
                    new ActiveXObject(versions[i]);
                    arguments.callee.activeXString = versions[i];
                    break;
                } catch (ex) {
                    //跳过
                }
            }
        }
        return new ActiveXObject(arguments.callee.activeXString);
    } else {
        throw new Error("No XHR abject available");
    }
}

// get
xhr.open('get', 'url', true);
xhr.onreadystatechange = readyStateChange;
xhr.send(null);
//post
xhr.open('post', 'post.php', true);
xhr.onreadystatechange = readyStateChange;
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(jsonData);

//使用
let xhr = creatXHR();
function readyStateChange () {
    if (xhr.readyState == 4) {
        if ((xhr.status >=200 && xhr.status < 300) || xhr.status == 304) {
            console.log(xhr.responseText);
        } else {
            console.log("Request was unsucessful:" + xhr.status);
        }
    }else {
        //请求状态还没有成功，页面等待
        document .getElementById ("loading").innerHTML ="数据加载中";
    }
};
