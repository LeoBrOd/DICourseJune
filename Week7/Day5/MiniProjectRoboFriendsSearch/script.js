const robots = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    image: "https://robohash.org/1?200x200",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    image: "https://robohash.org/2?200x200",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    image: "https://robohash.org/3?200x200",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    image: "https://robohash.org/4?200x200",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    image: "https://robohash.org/5?200x200",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    image: "https://robohash.org/6?200x200",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    image: "https://robohash.org/7?200x200",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    image: "https://robohash.org/8?200x200",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    image: "https://robohash.org/9?200x200",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    image: "https://robohash.org/10?200x200",
  },
];
robots.forEach((e) => {
  const newDiv = document.createElement("div");
  newDiv.setAttribute(
    "class",
    "card border-dark"
  );
  cardHolder.appendChild(newDiv);
  const newImg = document.createElement("img");
  newImg.setAttribute(
    "class",
    "card-img rounded-circle bg-dark"
  );
  newImg.src = e.image;
  newDiv.appendChild(newImg);
  const newTitle = document.createElement("h5");
  newTitle.setAttribute("class", "card-title");
  newTitle.innerHTML = e.name;
  newDiv.appendChild(newTitle);
  const newUserName =
    document.createElement("h6");
  newUserName.setAttribute(
    "class",
    "card-subtitle"
  );
  newUserName.innerHTML = e.username;
  newDiv.appendChild(newUserName);
  const newEmailAdress =
    document.createElement("a");
  newEmailAdress.setAttribute(
    "class",
    "card-link"
  );
  newEmailAdress.setAttribute(
    "href",
    `mailto: ${e.email}`
  );
  newEmailAdress.innerHTML = e.email;
  newDiv.appendChild(newEmailAdress);
});

function searchForRobot() {
  var input = document.getElementById("input");
  searchWord = input.value.toLowerCase();
  div = document.getElementsByClassName("card");
  for (let i = 0; i < div.length; i++) {
    nameOfRobot =
      div[i].getElementsByClassName(
        "card-title"
      )[0];
    searchValue =
      nameOfRobot.textContent ||
      nameOfRobot.innerText;
    if (
      searchValue
        .toLowerCase()
        .indexOf(searchWord) > -1
    ) {
      div[i].style.display = "";
    } else {
      div[i].style.display = "none";
    }
  }
}
