function reproduce() {
    const randNum = Math.floor(Math.random() * 100)
    console.log(this.name)
    if (randNum > this.survivalRate) {
        console.log('My offspring died!! NO!!!!')
    } else {
        // in case of survival
        this.offspringCount++

        if (this.mammal) {
            console.log('Heres a baby')
        } else {
            console.log('Heres an egg')
        }

        console.log(`I now have ${this.offspringCount} offsprings`)
    }

    console.log('')
}

function makeSound() {
    console.log(`I'm ${this.name} and I am ${this.size / 100}m big.`)
    console.log(`${this.sound}${this.sound}`)
    console.log('')
}

const offspringCount = 0

const animals = [
    {
        feathers: true,
        mammal: false,
        size: 100,
        name: 'flamingo',
        sound: 'croak',
        makeSound: makeSound,
        reproduce: reproduce,
        offspringCount,
        survivalRate: 20,
    },
    {
        feathers: false,
        mammal: true,
        size: 250,
        name: 'mr. dolphin',
        sound: 'iiiiiii',
        makeSound,
        reproduce,
        offspringCount,
        survivalRate: 70,
    },
    {
        feathers: false,
        mammal: true,
        size: 20,
        name: 'Lana',
        sound: 'wuff',
        makeSound,
        reproduce,
        offspringCount,
        survivalRate: 95,
    },
    {
        feathers: true,
        mammal: false,
        size: 15000,
        name: 'Reminator (T-Rex)',
        sound: 'mim',
        makeSound,
        reproduce,
        offspringCount,
        survivalRate: 50,
    },
]

for (let year = 0; year < 5; year++) {
    console.log('YEAR ' + year)
    animals.forEach(animal => {
        // animal.offSpringCount = 0 <- also possible
        animal.reproduce()
    })
    console.log('\n')
}
// my TAs are awesome<3

console.log(animals)
