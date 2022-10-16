//import express
const express = require ('express')

//create an instance of express
const app = express()
const PORT = 3000

//MIDDLEWARE
app.set('view engine','ejs')




//indicate a port to run the server on
app.listen(PORT,()=>{
    console.log(`Hello to the ${PORT}`)
})
