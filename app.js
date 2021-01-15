const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello world from Swaroop Reddy app!')
})

app.get('/about', (req, res) => {
    res.send('Hello from Swaroop Reddy page!')
})

app.get('/contact', (req, res) => {
    res.send('Hello contact Swaroop Reddy here!')
})

app.get('/help', (req, res) => {
    res.send('Hello world help!')
})

// '/help/node
app.get('/help/:topic', (req, res) => {
    res.send(`Hello world help on the topic ${req.params.topic} !`)
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})