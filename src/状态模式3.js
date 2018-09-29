import StateMachine from 'javascript-state-machine'

let fsm = new StateMachine({
    init: 'pending', //初始化状态
    transitions: [
        {
            name: 'resolve',
            from: 'pending',
            to: 'fullfilled'
        },
        {
            name: 'reject',
            from: 'pending',
            to: 'rejected'
        }
    ],
    methods: {
        onResolve: function (state, data) {
            //state 当前状态机实例;data-fsm.resolve(xxx)传递的参数
            data.successList.forEach(fn=>fn())
        },
        onReject: function (state, data) {
            //state 当前状态机实例;data-fsm.reject(xxx)传递的参数
            data.failList.forEach(fn=>fn())
        }
    }
})

//定义 promise
class MyPromise {
    constructor(fn) {
        this.successList = []
        this.failList = []
        fn(function () {
            fsm.resolve(this)
        }, function () {
            fsm.reject(this)
        })
    }
    then(successFn,failFn){
        this.successList.push(successFn)
        this.failList.push(failFn)
    }
}

function loadImg(src) {
    const promise = new Promise(function (resolve, reject) {
        let img = document.createElement('img')
        img.onload = function () {
            resolve(img)
        }
        img.onerror = function () {
            reject()
        }
        img.src = src
    })
    return promise
}
let src = 'http://pic29.nipic.com/20130511/9252150_174018365301_2.jpg'
let result = loadImg(src)
result.then(function () {
    console.log('ok1')
}, function () {
    console.log('fail1')
})
result.then(function () {
    console.log('ok2')
}, function () {
    console.log('fail2')
})
