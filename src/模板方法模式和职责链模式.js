/*模板方法模式*/
class Action{
    handle(){
        handle1()
        handle2()
        handle3()
    }
    handle1(){
        console.log('1')
    }
    handle2(){
        console.log('1')
    }
    handle3(){
        console.log('1')
    }
}

/*职责链模式*/

class Action2{
    constructor(name){
        this.name = name
        this.nextAction = null
    }

    setNextAction(action){
        this.nextAction = action
    }
    handle(){
        console.log(`${this.name} 审批`)
        if(this.nextAction != null){
            this.nextAction.handle()
        }
    }
}


let a1 = new Action2('组长')
let a2 = new Action2('经理')
let a3 = new Action2('总监')

a1.setNextAction(a2)
a2.setNextAction(a3)

a1.handle()

/*
联想 链式操作

jQuery的链式操作
Promise.then
rxjs的pipe
*/
