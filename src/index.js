const express = require('express')
const app = express()
const path = require('path')
const PORT = 3000
const https = require('https')

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    
    const url = 'https://v2.jokeapi.dev/joke/Programming';
    https.get(url, function(response) {
        response.on("data", function(data){
            const jokeData = JSON.parse(data);
            console.log(jokeData);
        })
    })

    // const joke = $.getJSON(`https://v2.jokeapi.dev/joke/Programming`).then(response => response.json())
    // console.log(joke);
    
    // if (joke.joke) {
    //   document.getElementById('joke-all').innerHTML = joke.joke;
    // } else {
    //   document.getElementById('joke-setup').innerHTML = joke.setup;
    //   document.getElementById('joke-delivery').innerHTML = joke.delivery;
    // }

    res.sendFile(path.join(__dirname, 'pages/index.html'))
})

app.get('/start', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages/start.html'))
})

app.get('/template', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages/template.html'))
})

app.use(express.static(path.join(__dirname, '../public')))

app.listen(PORT, () => {
console.log(`App running on port ${PORT} http:localhost:${PORT}`)
})