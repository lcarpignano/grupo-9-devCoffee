const fs = require('fs');


module.exports = {
  product: (req, res) => {
    res.render("product");
  },
  catalog: (req, res) => {
    
    let products = require('../database/coffees.json');
    res.render("catalog", {products});
  },
  shoppingCart: (req, res) => {
    res.render("shoppingCart");
  },
  createEditProduct: (req, res) => {
    res.render("createEditProduct");
  },
  createProduct: (req, res) => {
    let coffees = require('../database/coffees.json')
    
    let coffee = {
      id: (coffees.length + 1),
      name: req.body.name,
      photo: req.body.photo,
      description: req.body.description,
      price: req.body.price,
    }
    
    coffees.push(coffee);

    fs.writeFileSync('../database/coffees.json', JSON.stringify(coffees))

    res.redirect('index');
  },
};
