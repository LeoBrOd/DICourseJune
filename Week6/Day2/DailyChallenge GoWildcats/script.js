const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];;
let userNames =[]
   gameInfo.forEach( e => {
    userNames.push(`${e.username}!`)
   })
   console.log(userNames);

let viners =[]
   gameInfo.forEach( e => {
    e.score>5
    ?viners.push(`${e.username}!`)
    :0
   })
   console.log(viners);
let totalScore = 0
   gameInfo.forEach( e => {
    totalScore+=e.score
   })
   console.log(totalScore);