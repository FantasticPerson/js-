class Adaptee{
    specificRequest(){
        return '德国标准高插头'
    }
}

class Target{
    constructor(){
        this.adaptee = new Adaptee()
    }

    request(){
        let info = this.adaptee.specificRequest()
        console.log(`${info} - 转换器 - 中国标准插头`)
    }
}

let target = new Target()
target.request()

/*
    场景 
    封装旧接口,新旧接口分离


    做一层适配器
    var $={
        ajax:function(options){
            return ajax(options)
        }
    }

    vue computed
*/