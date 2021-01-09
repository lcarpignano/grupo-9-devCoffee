const express = require ('express');
const path = require ('path');

const app = express();

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'))
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'))
})

app.get('/catalogo', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/productcatalog.html'))
})

app.get('/shopping-cart', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/shopping-cart.html'))
})

app.get('/producto', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/product-detail.html'))
})

app.listen(process.env.PORT || 3030, console.log('Ya puedes ir a http://localhost:3030'));

