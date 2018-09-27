/*装饰器模式*/


/*
    下面是装饰类
*/
class Circle{
    draw(){
        console.log('画一个圆形')
    }
}

class Decorator{
    constructor(circle){
        this.circle = circle
    }
    draw(){
        this.circle.draw()
        this.setRedBorder(circle)
    }
    setRedBorder(circle){
        console.log('设置红色边框')
    }
}

let circle = new Circle()
circle.draw()
console.log('------------------')
let decorator = new Decorator(circle)
decorator.draw()

/*
    装饰类

    @testDec
    class Demo{
        //...
    }
    function testDec(target){
        target.isDec = true
    }

    alert(Demo.isDec) //true


    ------------------

    @decorator
    class A {}
    //等同于
    class A {}
    A = decorator(A) || A;
*/


function testDec(isDec){
    return function(target){
        target.isDec = isDec
    }
}

@testDec(false)
class Demo{

}

alert(Demo.isDec)

/*
    -------------------------------------
*/
function minxins(...list){
    return function(target){
        Object.assign(target.prototype,...list)
    }
}
const Foo = {
    foo(){
        alert('foo')
    }
}

@minxins(Foo)
class MyClass{

}

let obj = new MyClass()
console.log(obj)
obj.foo()


/*
    下面是装饰方法
*/
/*
    装饰方法 只读装饰
    function readonly(target,name,descriptor){
        descriptor.writable = false;
        return descriptor
    }
*/

/*
function readonly(target,name,descriptor){
    descriptor.writable = false;
    return descriptor
}

class Person {
    constructor(){
        this.first = 'A'
        this.last = "B"
    }

    @readonly
    name(){
        console.log(`${this.first} ${this.last}`)
    }
}

let p = new Person()
p.name()

p.name = function(){} //会报错，因为是只读的
*/

function log(target,name,descriptor){
    let oldvalue = descriptor.value
    descriptor.value = function(){
        console.log(`calling ${name} width`, arguments)
        return oldvalue.apply(this,arguments)
    }
    return descriptor
}

class Math{
    @log
    add(a,b){
        return a+b
    }
}

let math = new Math()
const result = math.add(2,4)

console.log('result:'+result)