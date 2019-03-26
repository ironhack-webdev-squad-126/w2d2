// setTimeout(function() {
//     console.log('Hello')
// }, 1000)

let seconds = 10

// each second, decrease the seconds variable (until 0)
// also put the seconds on the page every second with DOM manipulation
const myInterval = setInterval(function() {
    if (seconds < 0) return clearInterval(myInterval)

    // seconds-- <- alternative
    // console.log(seconds)
    console.log(--seconds)
}, 1000)
