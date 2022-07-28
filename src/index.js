const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const https = require('https');

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let joke = "";
    const jokes = [];

    const url = 'https://v2.jokeapi.dev/joke/Programming';

    const data = https.get(url, function(response) {
        response.on("data", function(data){
            const jokeData = JSON.parse(data);
            if (jokeData.joke) {
                joke = jokeData.joke;
            } else if (jokeData.setup && jokeData.delivery) {
                joke = (jokeData.setup + "\n" + jokeData.delivery);
            }
            res.render('index', {yourJoke: joke});
            console.log(joke);
        })
    })
    // res.render('index', {yourJoke: joke});
    // res.sendFile(path.join(__dirname, 'pages/index.html'))
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