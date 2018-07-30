/***************** 实例一 ajax *****************************/
let get = function (url) {
    let promise = new Promise (function (resolve, reject) {
        function handler () {
            if (this.status === 200) {
                resolve(this.response);
            } else {
                reject(new Error(this.status, this.statusText));
            }
        };
        let client = new XMLHttpRequest();
        client.open("GRT", url);
        client.onreadystatechange = handler;
        client.responseType = "json";
        client.setRequestHeader("Accept", "application/json");
        client.send();
    })
    return promise;
};
//应用
get('url')
.then(function (res) {
    console.log(res);
})
.catch(function (status, errorMessage) {
    console.error(status+ ':' +errorMessage);
})


/***************** 实例二 setTimeout *****************************/
function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done');
    });
}
timeout(1000).then((value) => {
    console.log(value);
});


/***************** 实例3 image加载 *****************************/
const preloadImage = function(path) {
    return new Promise(function(resolve, reject) {
        let image = new Image();
        image.onload = resolve;
        image.onerror = reject;
        image.src = path;
    });
}