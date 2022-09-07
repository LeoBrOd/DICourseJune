const axios = require("axios");

async function getUsers() {
  try {
    let response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(response.data);
  } catch (e) {
    console.log(e);
  }
}
getUsers();
