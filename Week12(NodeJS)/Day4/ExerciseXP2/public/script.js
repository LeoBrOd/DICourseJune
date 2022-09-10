function user() {
  fetch("http://localhost:3000/getUser")
    .then((res) => res.json())
    .then((ret) => {
      console.log(ret);
    })
    .catch((e) => {
      console.log(e);
    });
}
user();

function myFunction() {
  alert("Hello from JavaScript");
}
