//Exerciuse 1
let person1 = {
    FullName: "Jack",
    Mass: 95,
    Height: 180,
    bmi: function(){
    return (this.Mass/(this.Height*this.Height/1000))
    }}
let person2 = {
    FullName: "Randy",
    Mass:80,
    Height:170,
    bmi: function(){
    return (this.Mass/(this.Height*this.Height/1000))
}}
if (person1.bmi()>person2.bmi()){
    console.log(person1.FullName)}
    else{console.log(person2.FullName)}

//Exerciuse 2
let gradeList = {
    Math: 80,
    English: 85,
    Activities: 60,
    Geographie: 70
}
let value = Object.values(gradeList)
function findAvg() {
    let sum = 0
    for (let i = 0; i < value.length; i++) {
        sum+= value[i]
    }
    return sum/value.length
}
console.log(findAvg());
findAvg()>65
? alert(`Congatulations, your mark is ${findAvg()} and you passed the test`)
: alert(`Sorry, your mark is ${findAvg()} and you failed the test`)


