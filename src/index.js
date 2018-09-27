/*
    使用场景

    core-decorators
*/

import {readonly,deprecate} from 'core-decorators'
class TestReadonly{
    @readonly
    name(){
        return 'zhang san'
    }
    @deprecate('即将废用',{url:'www.http.com'})
    speak(){
        return '1234455'
    }
}

let p = new TestReadonly()
alert(p.name())
alert(p.speak())
//p.name = function(){} //会报错
