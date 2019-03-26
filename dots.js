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
const game = new Game()

class Dot {
    constructor(x, y, size = 20, color = '#942942') {
        this.x = x
        this.y = y
        this.size = size
        this.color = color

        const domEl = document.createElement('div')
        this.reference = domEl

        domEl.style.position = 'absolute'
        domEl.style.width = `${size}px`
        domEl.style.height = `${size}px`
        domEl.style.backgroundColor = `${color}`
        domEl.style.borderRadius = `${size / 2}px`
        domEl.style.left = `${x - size / 2}px`
        domEl.style.top = `${y - size / 2}px`

        // add a click listener for the domEl
        // remove that dot from the page
        domEl.addEventListener(
            'click',
            function() {
                this.reference.remove()
                game.dots = game.dots.filter() // filter out the removed dot
            }.bind(this)
        )

        document.querySelector('#game').appendChild(domEl)
    }
}
