import StateMachine from 'javascript-state-machine'
import $ from 'jquery'

let jsm = new StateMachine({
    init:'收藏',
    transitions:[
        {
            name:'doStore',
            from:'收藏',
            to:'取消收藏'
        },{
            name:'deleteStore',
            from:'取消收藏',
            to:'收藏'
        }
    ],
    methods:{
        onDoStore:function(){
            alert('收藏成功')
            updateText()
        },
        onDeleteStore:function(){
            alert('取消收藏成功')
            updateText()
        }
    }
})

let btn = document.getElementById('btn1')
$(btn).click(function(){
    if(jsm.is('收藏')){
        jsm.doStore()
    } else {
        jsm.deleteStore()
    }
})
function updateText(){
    $(btn).text(jsm.state)
}
$(btn).text(jsm.state)


