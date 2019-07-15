/****** 工厂模式 ******/
function createPerson(name, age, job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function() {
        console.log(this.name);
    }
}
var person1 = createPerson('cc', 24, 'web');



/****** 构造函数与原型组合模式组合 ******/
function Person(name, age, jon) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends = ["cc", 'ccc'];
}
Person.prototype = {
    constructor : Person,
    sayName : function() {
        console.log(this.name);
    }
}
var person1 = Person('cc', 24, 'web');
var person2 = Person('ccc', 25, 'web');
person1.friends.push('ccccc');
console.log(person1.friends === person2.friends);   //false
console.log(person1.sayName === person2.sayName);   //true



/****** 动态原型模式 ******/
function Person(name, age, job) {
    //属性
    this.name = name;
    this.age = age;
    this.job = job;
    //方法
    if(typeof this.sayName != "function") {
        Person.prototype.sayName = function() {
            console.log(this.name);
        }
    }
}
var person1 = Person('cc', 24, 'web');
person1.sayName();



/****** 寄生构造函数模式 ******/
//对象
function Person(name, age, job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function() {
        console.log(this.name);
    }
    return o;
}
var person1 = Person('cc', 24, 'web');
person1.sayName();
//数组
function SpecialArray() {
    //创建数组
    var values = new Array();
    //添加值
    values.push.apply(values, arguments);
    //添加方法
    values.toPipedString = function() {
        return this.join("|");
    }
    return values;
}
var colors = new SpecialArray('red', 'blue', 'yellow');
console.log(colors.toPipedString());   //



/****** 稳妥构造函数模式 ******/
function Person(name, age, job) {
    var o = new Object();
    //可以在这里定义私有变量和函数

    //添加方法
    o.sayName = function() {
        console.log(name)
    };
    return o;
}
var person1 = Person('cc', 24, 'web');
person1.sayName();