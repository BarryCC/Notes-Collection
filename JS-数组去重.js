// ES6，使用set数据类型，唯一性
// 方法一，Array.from()：将一个类数组对象或者可遍历对象转换成一个真正的数组
function unique(array) {
    return Array.from(new Set(array));
}
//方法二，用...(展开操作符)操作符将Set转换为Array
let unique = (array) => [...new Set(array)]

// indexOf，在res数组中不存在（indexof方法，如果没有即返回-1）项新添到res数组中
function unique(array) {
    var res = [];
    for (var i = 0, len = array.length; i < len; i++) {
        var current = array[i];
        if (res.indexOf(current) === -1) {
            res.push(current)
        }
    }
    return res;
}

// filter，返回惟一的
function unique(array) {
    var res = array.filter(function(item, index, array){
        return array.indexOf(item) === index;
    })
    return res;
}