class Building {
    constructor() {
        this.type = 'hut'
        this.height = 150
        this.color = 'brown'
    }
}

const firstBuilding = new Building()

firstBuilding.color = 'white'
console.log('firstBuilding', firstBuilding)
console.log(firstBuilding.height)
