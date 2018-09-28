/*
顺序访问一个集合，无需知道集合的内部结构（封装）
*/
class Iterator{
    constructor(container){
        this.list = container.list
        this.index = 0
    }

    next(){
        if(this.hasNext()){
            return this.list[this.index++]
        }
    }

    hasNext(){
        if(this.index >= this.list.length){
            return false
        }
        return true
    }
}
class Container{
    constructor(list){
        this.list = list
    }
    //生成遍历器
    getIterator(){
        return new Iterator(this)
    }
}

let arr = [1,2,3,4,5,6]
let container = new Container(arr)
let iterator = container.getIterator()
while(iterator.hasNext()){
    console.log(iterator.next())
}

/*
场景
jQuery each
ES6 Iterator
*/

function each2(data){
    let iterator = data[Symbol.iterator]()
    let item = {done:false}
    while(!item.done){
        item = iterator.next()
        if(!item.done){
            console.log(item.value)
        }
    }
}

//for...of语法
//for...in语法
function each3(data){
    for(let item of data){
        console.log(item)
    }
}

each2(arr)
each3(arr)

let arr2 = [1,2,3,4]
let nodeList = document.getElementsByTagName('p')
let m = new Map()
m.set('a',100)
m.set('b',200)

each3(arr2)
each3(nodeList)
each3(m)
