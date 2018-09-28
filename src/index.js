/*
发布 订阅
可以一对多
*/
//主题 保存状态 状态发生变化之后 触发所有观察者对象
class Subject{
    constructor(){
        this.state = 0
        this.observers = []
    }

    getState(){
        return this.state
    }

    setState(state){
        this.state = state
        this.notifyAllObservers()
    }
    notifyAllObservers(){
        this.observers.forEach(observer=>{
            observer.update()
        })
    }
    attach(observer){
        this.observers.push(observer)
    }
}

//观察者
class Observer{
    constructor(name,subject){
        this.name = name
        this.subject = subject
        this.subject.attach(this)
    }

    update(){
        console.log(`${this.name} update, state: ${this.subject.getState()}`)
    }
}

let subject = new Subject()
let observer1 = new Observer('o1',subject)
let observer2 = new Observer('o2',subject)
let observer3 = new Observer('o3',subject)
let observer4 = new Observer('o4',subject)
let observer5 = new Observer('o5',subject)

subject.setState(1)
subject.setState(2)
subject.setState(3)

/*
    场景
    
    1.网页时间绑定
    $('btn1').click(function(){
        console.log(1)
    })
    $('btn1').click(function(){
        console.log(2)
    })
    $('btn1').click(function(){
        console.log(3)
    })

    2.Promise

    .then .then

    3.jQuery callbacks()

    var callback = $.Callbacks()
    callback.add(function(info){
        console.log('fn1',info)
    })
    callback.add(function(info){
        console.log('fn2',info)
    })
    callback.add(function(info){
        console.log('fn3',info)
    })
    callback.add(function(info){
        console.log('fn4',info)
    })

    4.nodejs 自定义事件

    const EventEmitter = require('events').EventEmitter
    const emitter = new EventEmitter()
    emitter.on('showName',()=>{
        console.log('werwerew')
    })
    emitter.emit('some')

    class Dog extends EventEmitter{

    }

    var simon = new Dog()
    simon.on('bark',()=>{})
    simon.emit('666')

    //Stream 用到自定义事件
*/

