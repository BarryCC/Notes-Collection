/*********************************** 数组排序 *******************************************/
// sort方法，升序
arr.sort(function(a, b){
    return a-b;
});
// sort方法，降序
arr.sort(function(a, b){
    return b-a;
});
// 冒泡排序法
function bubbleSort(arr) {
    for(var i=0; i<arr.length; i++) {
        for(var j=0; j<arr.length-i-1; j++) {
            if(arr[j] > arr[j+1]) {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
// 快速排序
function quickSort(arr) {
    if(arr.length<=1) {return arr;}
    var mid = Math.floor(arr.length/2),
        left = [],
        right = [],
        middle = arr.splice(mid, 1)[0];
    for(var i=0; i<arr.length; i++) {
        if(arr[i]<middle) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(middle, quickSort(right));
}


/*********************************** 数组去重 *******************************************/
// 方法一，ES6，使用set数据类型的唯一性，Array.from()：将一个类数组对象或者可遍历对象转换成一个真正的数组
function unique(array) {
    return Array.from(new Set(array));
}
// 方法二，ES6，使用set数据类型的唯一性，用...(展开操作符)操作符将Set转换为Array
let unique = (array) => [...new Set(array)]
// 方法三，indexOf，在res数组中不存在（indexof方法，如果没有即返回-1）项新添到res数组中
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
// 方法四，filter，返回惟一的
function unique(array) {
    var res = array.filter(function(item, index, array){
        return array.indexOf(item) === index;
    })
    return res;
}


/*********************************** 数组获取最大值 *******************************************/
// ES5
function getMaxOfArr(arr) {
    return Math.max.apply(null, arr);
}
// ES6
Math.max(...arr);

/*********************** 使用push方法，将一个数组添加到另一个数组的尾部**************************/
// ES5
Array.prototype.push.apply(arr1, arr2);
// ES6
arr1.push(...arr2);

/*********************** 复制 **************************/
// ES5
var a1 = [1, 2];
var a2 = a1.concat();
// ES6
const a1 = [1, 2];
const a2 = [...a1];

/*********************** 合并数组 **************************/
// ES5
arr1.concat(arr2, arr3);
// ES6
[...arr1, ...arr2, ...arr3]