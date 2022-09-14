function login(event){
  event.preventDefault()
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  console.log(username,password);
  fetch('/login',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({username,password})
  })
  .then(res=>res.json())
  .then(ret=>{
    console.log(ret);
  })
  .catch(e=>{
    console.log(e);
  })
}

function register(event){
  event.preventDefault();
  const username = document.getElementById('uname').value;
  const password = document.getElementById('pass').value;
  const fname = document.getElementById('fname').value;
  const lname = document.getElementById('lname').value;
  const email = document.getElementById('email').value;
  // console.log(username,password,first_name,last_name,email);
  fetch('/register',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({username,password,fname,lname,email})
  })
  .then(res=>res.json())
  .then(ret=>{
    console.log(ret);
  })
  .catch(e=>{
    console.log(e);
  })
}
