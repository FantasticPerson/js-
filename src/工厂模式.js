class Product{
    constructor(name){
        this.name = name
    }

    init(){
        console.log('init')
    }

    fn1(){
        console.log('fn1')
    }

    fn2(){
        console.log('fn2')
    }
}

class Creator{
    create(name){
        return new Product(name)
    }
}

let creator = new Creator()
let p = creator.create('p1')
p.init()
p.fn1()
p.fn2()

//场景
// jQuery $
/*
    $('div') 和 new $('div') 有何区别

    1.书写麻烦 Jquery的链式调用将会成为噩梦
    2.一旦jQuery名字变化，将是灾难性的

    阅读经典库的意义，创新和拿来主义

    学习如何实现功能 学习设计思路
*/

/*
    React.createElement
*/