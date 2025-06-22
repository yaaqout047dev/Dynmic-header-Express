const express = require('express')
const app = express()

const port = process.env.PORT ||3000


const path = require('path')

const hbs = require('hbs')
app.set('view engine','hbs')

const partialPath = path.join(__dirname, '../partials')
hbs.registerPartials(partialPath)

app.use(express.static('public'))

// ----------- #Pages . ------------ 

app.get('/',(req,res)=>{
  res.render('index',{
    title: "Home Page Content"
  })
})
app.get('/about',(req,res)=>{
  res.render('about',{
    title: "About Page Content"
  })
})
app.get('/contact',(req,res)=>{
  res.render('contact',{
    title: "Contact Page Content"
  })
})
app.get('/product',(req,res)=>{
  res.render('product',{
    title: "Product Page Content"
  })
})
app.get('/service',(req,res)=>{
  res.render('service',{
    title: "Service Page Content"
  })
})


app.get('*',(req,res)=>{
  res.render('404',{
    title: "Service Page Content"
  })
})
// app.get('*' , (req , res)=> {          
//   res.send('404 page not found ')
// })



app.listen(port , ()=> {                          
  console.log(`Example app listening at http://localhost:${port}`)     
  })