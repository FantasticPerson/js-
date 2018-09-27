//父类
class People{
    name
    age
    protected weight
    constructor(name,age){
        this.name = name
        this.age = age
        this.weight = 120
    }
    eat(){
        console.log(`${this.name} eat something`)
    }
    speak(){
        console.log(`My name is ${this.name}, age ${this.age}`)
    }
}

class Student extends People{
    number
    private girlfriend
    constructor(name,age,number){
        super(name,age)
        this.number = number
        this.girlfriend = 'xiaoli'
    }
    study(){
        console.log(`${this.name} study`)
    }
    getWeight(){
        alert(`weight ${this.weight}`)
    }
}

let xiaoming = new Student('xiaoming',10,'A1')
xiaoming.eat()
xiaoming.speak()
xiaoming.study()
xiaoming.getWeight()

alert(xiaoming.girlfriend) // 不合法的  因为是私有的

