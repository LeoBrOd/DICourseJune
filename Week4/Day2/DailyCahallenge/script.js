let sentence = prompt("Please choose few words").split(",")
let frame =  () => {
    let longElement = Math.max(...sentence)
    let star = "*"
    let fAndLRow = ()=> {return star.repeat(longElement+4)}
    //let output = `${fAndLRow(sentence)}`
    sentence.forEach(function(sentence)){
        sentence[i]=`* ${sentence[i]} *`
        return sentence
    }}
