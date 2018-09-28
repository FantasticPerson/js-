/*
    外观模式
    不符合单一职责原则，慎用，不可滥用
*/

/* 
//使用方法
function bindEvent(elem,type,selector,fn){
    if(fn == null){
        fn = selector
        selector = null
    }
}

bindEvent(elem,'click','#div1',fn)
bindEvent(elem,'click',fn)
*/