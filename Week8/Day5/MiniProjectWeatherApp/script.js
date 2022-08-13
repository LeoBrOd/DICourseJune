let xhr = new XMLHttpRequest();
const API_KEY = '6bc236fa8bd5e7e03f83fd8cea3eac74';

let root = document.getElementById('root');

xhr.onload = function(){
  if(xhr.status != 200){
    alert(`Error ${xhr.status} - ${xhr.statusText}`)
  }
  else {
    showImg(xhr.response.data);
  }
}

document.getElementById('myForm').addEventListener('submit',function(event){
  event.preventDefault()
  console.log(xhr.responseText);
  //submitForm();
})

document.getElementById('erase').addEventListener('click',function(){
  root.innerHTML = ''
})


function submitForm(){
  const cityName = document.getElementById('cityName').value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
  xhr.open('GET',url);
  xhr.responseType = 'json';
  xhr.send();
}


// function showImg(arr) {
//   let div = document.createElement('div');
//   let img = document.createElement('img');
//   let btn = document.createElement('button');

//   div.style.display = 'inline-block';

//   img.setAttribute('src', arr[0].images.fixed_width.url);
//   img.style.width = '120px';
//   div.appendChild(img);

//   btn.textContent = 'X';
//   btn.addEventListener('click', function(){
//     root.removeChild(div);
//   })
//   div.appendChild(btn);

//   root.appendChild(div)
// }