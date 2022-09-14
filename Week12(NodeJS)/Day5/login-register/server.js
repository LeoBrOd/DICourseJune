const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());
// body-parser
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(5000, ()=> {
  console.log('on port 5000');
})

app.use('/', express.static(__dirname+'/public'))

let users = []

app.post('/register',(req,res)=>{
  const f = fs.readFileSync('./users');
  users = JSON.parse(f.toString());
  //console.log(users);
  const index = users.findIndex(item => item.username == req.body.username)
  if(index === -1){
    users.push(req.body)

    fs.writeFile('./users', JSON.stringify(users), err => {
      if(err){
        console.log(err);
      }
    })

    return res.status(200).json({msg:'ok',username:req.body.username})
  }

  return res.status(201).json({msg:'email alredy exist',username:req.body.username})

})

app.post('/login', (req,res)=>{
  console.log('login',req.body);
  const f = fs.readFileSync('./users');
  users = JSON.parse(f.toString());

  const user = users.find(item => item.username == req.body.username);
  if(user){
    if(req.body.password === user.password){
      return res.status(200).json({msg:'welcome back',username:req.body.username})
    }
    else{
      return res.status(404).json({msg:'wrong password'})
    }
  }
  else{
    return res.status(404).json({msg:'wrong username'})
  }
})
