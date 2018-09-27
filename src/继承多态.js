//父类
class People{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    eat(){
        console.log(`${this.name} eat something`)
    }
    speak(){
        console.log(`My name is ${this.name}, age ${this.age}`)
    }
}

let zhang = new People('zhang',20)
zhang.eat()
zhang.speak()

let wang = new People('wang',20)
wang.eat()
wang.speak()

class Student extends People{
    constructor(name,age,number){
        super(name,age)
    }
    study(){
        console.log(`${this.name} study`)
    }
}

let xiaoming = new Student('xiaoming',10,'A1')
xiaoming.eat()
xiaoming.speak()
xiaoming.study()

//多态
class SuperA{
    constructor(name){
        this.name = name
    }
    saySomething(){

    }
}

class A extends People{
    constructor(name){
        super(name)
    }

    saySomething(){
        console.log('I am A')
    }
}

class B extends People{
    constructor(name){
        super(name)
    }

    saySomething(){
        console.log('I am B')
    }
}

let a = new A('a')
a.saySomething()
let b = new B('b')
b.saySomething()

