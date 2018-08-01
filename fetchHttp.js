/**
 * Fetch API 提供JavaScript接口，用于访问和操纵HTTP管道的部分，如请求和响应。
 * 它提供一个全局 fetch()方法，提供一种简单合理的方式来跨网络异步获取资源。
 * 基于ES6 promise
 * 解决兼容性问题：https://github.com/github/fetch
 */

/**
 * POST请求
 * @param url 请求地址
 * @param data 请求参数
 */
function postData(url, data) {
    return fetch(url, {
        body: JSON.stringify(data),
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, same-origin, *omit
        headers: {
        'user-agent': 'Mozilla/4.0 MDN Example',
        'content-type': 'application/json'
        },
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // *client, no-referrer
    })
    .then(response => response.json())
}
// example
postData('http://example.com/answer', {answer: 42})
.then(data => console.log(data))
.catch(error => console.error(error))


/**
 * 将对象转成 a=1&b=2的形式，用于处理get请求的参数
 * @param obj 对象
 */
function getDataHandle(obj, arr = [], idx = 0) {
    for (let item in obj) {
      arr[idx++] = [item, obj[item]]
    }
    return new URLSearchParams(arr).toString()
}

/**
 * get请求
 * @param url 请求地址
 * @param data 请求参数
 */
function getData(url, data) {
    const searchStr = getDataHandle(data);
    let initObj = {};
    url += '?' + searchStr;
    initObj = {
        method: 'GET',
        credentials: 'include'
    };
    fetch(url, initObj).then((res) => {
        return res.json()
    }).then((res) => {
        return res
    })
}