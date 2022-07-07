let bottles = Number(prompt("How many bottles do you have?"))
for (let index = 1; index <=bottles; index++) {
    //let left = bottles-index
    switch (true) {
        case (index===1):
            console.log(`${bottles} bottles of beer on the wall
            ${bottles} bottles of beer
            Take ${index} down, pass it around
            ${bottles-index} bottles of beer on the wall
            `)
            break;
        case (index>1 && index<(bottles)):
            console.log( `${bottles-index+1} bottles of beer on the wall
            ${bottles-index+1} bottles of beer
            Take ${index} down, pass them around
            ${bottles-index} bottles of beer on the wall
            `)
            break;
        default:
            console.log( `1 bottle of beer on the wall
            1 bottle of beer
            Take 1 down, pass them around
            0 bottle of beer on the wall
            `);
            break;
    }
}