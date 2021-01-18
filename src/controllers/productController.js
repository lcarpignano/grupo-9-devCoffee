const fs = require('fs');



module.exports = {
  product: (req, res) => {
    res.render("product");
  },
  catalog: (req, res) => {
    res.render("catalog");
  },
  shoppingCart: (req, res) => {
    res.render("shoppingCart");
  },
  createEditProduct: (req, res) => {
    res.render("createEditProduct");
  },
  CreateProduct: (req, res) => {
    let coffees = JSON.parse(fs.readFileSync('../database/coffees.json', 'utf-8'));
    
    let coffee = {
      id: (coffees.length + 1),
      name: req.body.name,
      photo: req.body.photo,
      description: req.body.description,
      price: "$" + req.body.price,
    }
    
    coffees.push(coffee);

    fs.writeFileSync('../database/coffees.json', JSON.stringify(coffees));

    res.redirect("createEditProduct");
  },
};
