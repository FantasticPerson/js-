class RealImg{
    constructor(filename){
        this.filename = filename
        this.loadFromDisk()
    }

    display(){
        console.log('display... '+this.filename)
    }

    loadFromDisk(){
        console.log('loading... '+this.filename)
    }
}

class ProxyImg{
    constructor(filename){
        this.realImg = new RealImg(filename)
    }

    display(){
        this.realImg.display()
    }

    loadFromDisk(){
        this.realImg.loadFromDisk()
    }
}

let proxyImg = new ProxyImg('1.png')
proxyImg.display()

/*
    使用场景

    网页事件代理
    jQuery $.proxy

    ES6 proxy
*/


let star = {
    name:'章sd',
    age:25,
    phone:'star:13900001111'
}

let agent = new Proxy(star,{
    get:function(target,key){
        if(key === 'phone'){
            //返回经纪人自己的电话
            return 'agent:16899997777'
        }
        if(key === 'price'){
            //明星不报价，经纪人报价
            return 120000
        }
        return target[key]
    },
    set:function(target,key,val){
        if(key == 'customPrice'){
            if(val < 100000){
                throw new Error('价格太低')
            } else{
                target[key] = val
                return true
            }
        }
    }
})

console.log(agent.name)
console.log(agent.age)
console.log(agent.phone)
console.log(agent.price)

agent.customPrice = 150000
console.log(agent.customPrice)

/*
    代理模式 适配器模式
    
    适配器：提供不同的接口
    代理：提供一模一样的接口



    装饰器：扩展功能，原有功能不变可直接使用
    代理模式：显示原有功能，但是是经过限制或者阉割过的
*/