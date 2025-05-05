require('dotenv').config()
const express = require('express')

const app = express()
const port = process.env.PORT


app.get('/', (req , res) => {
    res.send('Hello Aditya..')

}) // 

app.get('/twitter', (req, res)=>{
    res.send('👋Hey AdiK.0251 Welcome to twitter!')
})

app.get('/login', (req, res)=>{
    res.send('<h1>Please login at AdiK.0251</h1>')
})


app.get('/youtube', (req, res)=>{
    res.send("<h2>Welcome to Aditya's youtube channel </h2>")
})

app.listen(process.env.PORT, ()=>{
    console.log(`Example app is listening on port ${port}`)

})

// Now deploying on production
// ensure that you have installed dotenv


