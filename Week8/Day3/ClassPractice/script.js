// const data = "q=arrive&source=en&target=he";

// const xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.onload = function () {
//   console.log(xhr.response);
// };

// xhr.open(
//   "POST",
//   "https://google-translate1.p.rapidapi.com/language/translate/v2"
// );
// xhr.setRequestHeader(
//   "content-type",
//   "application/x-www-form-urlencoded"
// );
// xhr.setRequestHeader(
//   "X-RapidAPI-Key",
//   "aa625f9aaamsh3271acd6480c954p16661djsnf58a2c620383"
// );
// xhr.setRequestHeader(
//   "X-RapidAPI-Host",
//   "google-translate1.p.rapidapi.com"
// );

// xhr.send(data);

const xhr = new XMLHttpRequest();

function aaa() {
  xhr.withCredentials = true;

  xhr.open(
    "POST",
    "https://google-translate1.p.rapidapi.com/language/translate/v2"
  );
  xhr.setRequestHeader(
    "content-type",
    "application/x-www-form-urlencoded"
  );
  xhr.setRequestHeader(
    "X-RapidAPI-Key",
    "aa625f9aaamsh3271acd6480c954p16661djsnf58a2c620383"
  );
  xhr.setRequestHeader(
    "X-RapidAPI-Host",
    "google-translate1.p.rapidapi.com"
  );

  xhr.responseType = "json";
  const text =
    document.getElementById("translate").value;
  const from =
    document.getElementById("from").value;
  const to = document.getElementById("to").value;
  let data = `q=${text}&source=${from}&target=${to}`;
  xhr.send(data);
}

xhr.onload = function () {
  console.log(xhr.response);
};
