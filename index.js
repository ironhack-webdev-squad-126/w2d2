const animals = [
    {
        feathers: true,
        mammal: false,
        size: 100,
        name: 'flamingo',
        sound: 'croak',
        makeSound: function() {
            console.log(`I'm ${this.name} and I am ${this.size / 100}m big.`)
            console.log(`${this.sound}${this.sound}`)
            console.log('')
        },
    },
    {
        feathers: false,
        mammal: true,
        size: 250,
        name: 'mr. dolphin',
        sound: 'iiiiiii',
    },
    {
        feathers: false,
        mammal: true,
        size: 20,
        name: 'Lana',
        sound: 'wuff',
    },
    {
        feathers: true,
        mammal: false,
        size: 15000,
        name: 'Reminator (T-Rex)',
        sound: 'mim',
    },
]
