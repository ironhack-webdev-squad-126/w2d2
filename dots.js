class Game {
    constructor() {
        this.dots = []

        // 1. add Event Listener that calls addDot
        document.querySelector('#game').addEventListener(
            'click',
            function(evt) {
                console.log(this)
                this.addDot(evt.offsetX, evt.offsetY)
            }.bind(this)
        )
    }

    addDot(x, y) {
        // 2. add a new dot to this.dots
        const newDot = new Dot(x, y)
        this.dots.push(newDot)
    }
}

class Dot {
    constructor(x, y, size = 20, color = '#942942') {
        this.x = x
        this.y = y
        this.size = size
        this.color = color

        const domEl = document.createElement('div')
        domEl.style.position = 'absolute'
        domEl.style.width = `${size}px`
        domEl.style.height = `${size}px`
        domEl.style.backgroundColor = `${color}`
        domEl.style.borderRadius = `${size / 2}px`
        domEl.style.left = `${x - size / 2}px`
        domEl.style.top = `${y - size / 2}px`

        document.querySelector('#game').appendChild(domEl)
    }
}

new Game()
