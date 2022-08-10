function reqListener() {
  const result = JSON.parse(this.responseText);
  console.log(result);
}

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open(
  "GET",
  "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=25"
);
req.send();

const req2 = new XMLHttpRequest();
req2.addEventListener("load", reqListener);
req2.open(
  "GET",
  "https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=10&offset=2"
);
req2.send();
