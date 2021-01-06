const express = require ('express');
const path = require ('path');

const app = express();

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'))
})

app.get('/register.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'))
})

app.get('/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'))
})

app.listen(3030, console.log('Ya puedes ir a http://localhost:3030'));




