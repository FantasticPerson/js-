class Car{
    constructor(number){
        this.number = number
    }
}

class Camera {
    shot(car){
        return {
            num:car.number,
            time:Date.now()
        }
    }
}
//显示屏
class Screen{
    show(car,inTime){
        console.log('车牌号',car.number,Date.now()-inTime)
    }
}
//停车场
class Park{
    constructor(floors){
        this.floors = floors || []
        this.camera = new Camera()
        this.screen = new Screen()
        this.carList = {} //存数摄像头拍摄车辆返回的信息
    }
    in(car){
        const info = this.camera.shot(car)
        const i = parseInt(Math.random()*100%100)
        const place = this.floors[0].places[i]
        place.in()
        info.place = place
        //记录信息
        this.carList[car.number] = info
    }
    out(car){
        //获取信息
        const info = this.carList[car.number]
        const place = info.place
        place.out()
        this.screen.show(car,info.time)
        delete this.carList[car.number]
    }
    emptyNum(){
        return this.floors.map(floor=>{
            return `${floor.index}层还有${floor.emptyPlaceNum()}个空闲车位`
        }).join('\n')
    }
}
//层
class Floor{
    constructor(index,places){
        this.index = index
        this.places = places || []
    }
    emptyPlaceNum(){
        let num = 0
        this.places.forEach(p => {
            if(p.empty){
                num++
            }
        });
        return num
    }
}

//车位
class Place{
    constructor(){
        this.empty = true
    }
    in(){
        this.empty = false
    }
    out(){
        this.empty = true
    }
}

//测试
//初始化停车场
const floors = []
for(let i=0;i<3;i++){
    const places = []
    for(let j=0;j<100;j++){
        places.push(new Place())
    }
    floors[i] = new Floor(i+1,places)
}

const park = new Park(floors)
const car1 = new Car(100)
const car2 = new Car(200)
const car3 = new Car(300)

console.log('第一辆车进入')
console.log(park.emptyNum())
park.in(car1)
console.log('第二辆车进入')
console.log(park.emptyNum())
park.in(car2)
console.log('第一辆车离开')
console.log(park.emptyNum())
park.out(car2)
console.log(park.emptyNum())


