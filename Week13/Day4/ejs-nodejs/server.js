const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

// set the view engine to nodejs
app.set('view engine', 'ejs');

app.use('/', express.static(__dirname+'/public'))

app.listen(process.env.PORT||5000, ()=>{
  console.log(`on port ${process.env.PORT||5000}`);
})

app.get('/home', (req,res) => {
  res.render('pages/index',{
    title:'Home with EJS is fun'
  })
})
app.get('/about', (req,res)=>{
  res.render('pages/about',{
    title:'About with EJS is fun'
  })
})

app.get('/shop', (req,res)=>{
  const products = [
    {id:1,name:'iPhone',price:800},
    {id:2,name:'iPad',price:700},
    {id:3,name:'iWatch',price:600},
  ]
  res.render('pages/shop',{
    title:'Shop with EJS is fun',
    data:products
  })
})
