const fs = require('fs')
const readline = require('readline')
const readStream = fs.createReadStream('./data/package.json')

let length = 0

readStream.on('data',function(chunk){
    let len = chunk.toString().length
    console.log(len)
    length += len
})

readStream.on('end',function(){
    console.log('长度',length)
    console.log('end')
})

let rl = readline.createInterface({
    input:fs.createReadStream('./data/package.json')
})

let lineNum = 0
rl.on('line',function(line){
    lineNum ++
})
rl.on('close',function(){
    console.log('lineNum',lineNum)
})