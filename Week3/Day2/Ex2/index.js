//Exercise 2 (Part 1)
let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"]
let myWatchedSeriesLength = myWatchedSeries.length
let myWatchedSeriesSentence = `${myWatchedSeries.slice(0 , 2)} and ${myWatchedSeries[2]}.`
console.log (`I watched ${myWatchedSeriesLength} series: ${myWatchedSeriesSentence}`)
//Exercise 2 (Part 2)
myWatchedSeries.splice(2,1,"friends")
myWatchedSeries.push("mr.robot")
myWatchedSeries.unshift("vikings")
myWatchedSeries.splice(1,1)
console.log(myWatchedSeries[1].charAt(2))
console.log(myWatchedSeries)