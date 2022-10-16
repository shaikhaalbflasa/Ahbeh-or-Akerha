//import express
const express = require ('express')
const ejsLayouts = require('express-ejs-layouts');

//create an instance of express
const app = express()
const PORT = 3000

//MIDDLEWARE
app.set('view engine','ejs')
app.use(ejsLayouts)

//HOME route
app.get("/", (req,res)=>{
    res.render('home.ejs')
})

//favorite animals
app.get("/animals", (req,res)=>{
    const faveAnimals =['cat','dog','bunnies']
    res.render('animals.ejs', {animals: faveAnimals})
})




//indicate a port to run the server on
app.listen(PORT,()=>{
    console.log(`Hello to the ${PORT}`)
})
