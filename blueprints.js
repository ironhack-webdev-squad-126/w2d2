class Building {
    constructor(color) {
        this.type = 'hut'
        this.height = 150

        if (color) {
            this.color = color
        } else {
            this.color = 'brown'
        }
    }
}

// 1.
// const firstBuilding = new Building()
// const secondBuilding = new Building()

// firstBuilding.color = 'white'
// console.log('firstBuilding', firstBuilding)
// console.log(firstBuilding.height)

// 2.
const customBuilding = new Building('yellow')
const customBuildingTwo = new Building('red')
const defaultBuilding = new Building()

console.log('customBuilding', customBuilding)
console.log('customBuildingTwo', customBuildingTwo)
console.log('defaultBuilding', defaultBuilding)
