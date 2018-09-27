function loadImg(src){
    let promise = new Promise((resolve,reject){
        let img = document.createElement('img')
        img.onload = function(){
            resolve(img)
        }
        img.onerror = function(){
            reject('图片加载失败')
        }
        img.src = src
    })
    return promise
}

let src = 'sf'
let result = loadImg(src)
resizeBy.then(function(img)=>{
    console.log(img)
    return img
})
.then(function(img){
    console.log('img')
})
.catch(function(err){
    console.log(err)
})