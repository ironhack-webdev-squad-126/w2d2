// setTimeout(function() {
//     console.log('Hello')
// }, 1000)

let seconds = 10

// each second, decrease the seconds variable (until 0)
// also put the seconds on the page every second with DOM manipulation
const myInterval = setInterval(function() {
    if (seconds < 0) {
        document.querySelector('#counter').innerHTML = 'TIME IS UP'
        return clearInterval(myInterval)
    }

    document.querySelector('#counter').innerHTML = seconds--
}, 1000)

const numbers = [1, 2, 3, 4, 5]
let index = 0

const sInterval = setInterval(function() {
    if (index === numbers.length) return clearInterval(sInterval)
    console.log(numbers[index++])
}, 1000)
