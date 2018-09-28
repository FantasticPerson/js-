const EventEmitter = require('events').EventEmitter

const emitter1 = new EventEmitter()
emitter1.on('some',(info)=>{
    console.log('fn1',info)
})
emitter1.on('some',(info)=>{
    console.log('fn2',info)
})

//触发 some 事件
emitter1.emit('some',66666)