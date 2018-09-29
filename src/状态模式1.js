/*
    状态模式

*/
class State{
    constructor(color){
        this.color = color
    }
    handle(context){
        console.log(`turn to ${this.color} light`)
        context.setState(this)
    }
}

class Context{
    constructor(){
        this.state = null
    }
    getState(){
        return this.state
    }
    setState(state){
        this.state = state
    }
}

let context = new Context()
let green = new State('green')
let yellow = new State('yellow')
let red = new State('red')

green.handle(context)
console.log(context.getState().color)

red.handle(context)
console.log(context.getState().color)

yellow.handle(context)
console.log(context.getState().color)

/*
场景
有限状态机
写一个简单的promise
*/