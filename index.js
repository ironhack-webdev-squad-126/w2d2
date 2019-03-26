function reproduce() {
    if (this.mammal) {
        console.log('Heres a baby')
    } else {
        console.log('Heres an egg')
    }
}

function makeSound() {
    console.log(`I'm ${this.name} and I am ${this.size / 100}m big.`)
    console.log(`${this.sound}${this.sound}`)
    console.log('')
}

const animals = [
    {
        feathers: true,
        mammal: false,
        size: 100,
        name: 'flamingo',
        sound: 'croak',
        makeSound: makeSound,
        reproduce: reproduce,
    },
    {
        feathers: false,
        mammal: true,
        size: 250,
        name: 'mr. dolphin',
        sound: 'iiiiiii',
        makeSound,
        reproduce,
    },
    {
        feathers: false,
        mammal: true,
        size: 20,
        name: 'Lana',
        sound: 'wuff',
        makeSound,
        reproduce,
    },
    {
        feathers: true,
        mammal: false,
        size: 15000,
        name: 'Reminator (T-Rex)',
        sound: 'mim',
        makeSound,
        reproduce,
    },
]

animals.forEach(animal => {
    animal.reproduce()
})
