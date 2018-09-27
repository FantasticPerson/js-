class Car{
    constructor(number,name){
        this.number = number
        this.name = name
    }
}

class Kuaiche extends Car{
    constructor(number,name){
        super(number,name)
        this.price = 1
    }
}

class Zhuance extends Car{
    constructor(number,name){
        super(number,name)
        this.price = 2
    }
}

class Trip{
    constructor(car){
        this.car=car
    }

    start(){
        console.log(`行程开始,名称${car.name},车牌号${car.number}`)
    }

    end(){
        console.log('行程结束',this.car.price * 5)
    }
}

let car  = new Kuaiche(1000,'桑塔纳')
let trip = new Trip(car)

trip.start()
trip.end()

