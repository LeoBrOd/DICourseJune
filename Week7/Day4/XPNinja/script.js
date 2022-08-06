class Bird {
  constructor() {
    console.log("I'm a bird. 🦢");
  }
}

class Flamingo extends Bird {
  constructor() {
    console.log("I'm pink. 🌸");
    super();
  }
}

const pet = new Flamingo();

//It will log  "I'm pink. 🌸" first, cause it's inside class and after "I'm a bird. 🦢", cause we using super after loging and inside construktor
