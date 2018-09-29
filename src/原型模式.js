/*
原型模式
clone 自己 生成一个新对象
*/

// Object.create

//衣蛾原型对象
let prototype = {
    getName:function(){
        return this.first + ' ' + this.last
    },
    say:function(){
        alert('hello')
    }

}

let x = Object.create(prototype)
x.first = "a"
x.last = "b"
x.say()
alert(x.getName())

let y = Object.create(prototype)
y.first = "c"
y.last = "d"
y.say()
alert(y.getName())
