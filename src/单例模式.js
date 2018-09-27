class SingleObject{
    login(){
        console.log('login...')
    }
}

SingleObject.getInstance = (function(){
    let instance
    return function(){
        if(!instance){
            instance = new SingleObject()
        }
        return instance
    }
})()

let obj1 = SingleObject.getInstance()
obj1.login()

let obj2 = SingleObject.getInstance()
obj2.login()

console.log(obj1 === obj2)


/*
    单例模式 不能这么用
    let obj1 = new SingleObject()
    let obj2 = new SingleObject()
*/

/*
    场景
    Jquery只用一个 $
    模拟登录框
    
*/