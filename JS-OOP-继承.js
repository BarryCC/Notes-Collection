/*************** 原型链 ****************/
function SuperType() {
    this.property = true;
};
SuperType.prototype.getSuperValue = function() {
    return this.property;
};
function SubType() {
    this.subprotype = false;
};
SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function() {
    return this.subprotype;
};
var instance = new SubType();
console.log(instance.getSuperValue());


/*************** 借用构造函数 ****************/
function SubType(name) {
    this.name = name;
    this.color = ['red', 'blue', 'green'];
}
function SubType() {
    SuperType.call(this, 'cc');
}
var instance = new SubType();
console.log(instance.name);


/*************** 组合继承 ****************/
function SuperType(name) {
    this.name = name;
    this.color = ['red', 'blue', 'green'];
}
SuperType.prototype.sayName = function() {
    console.log(this.name);
}
function SubType(name, age) {
    SuperType.call(this, name);
    this.age = age;
}
SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function() {
    console.log(this.age);
}
var instance = new SubType('cc', 24);
instance.color.push('black');
console.log(instance.color);//'red', 'blue', 'green', black
instance.sayName();//cc
instance.sayAge();//24

var instance2 = new SubType('cc2', 25);
console.log(instance.color);//'red', 'blue', 'green'
instance.sayName();//cc2
instance.sayAge();//25


/*************** 原型式继承 ****************/