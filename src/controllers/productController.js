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
    let coffee = {
      id: (coffees.length + 2),
      name: req.body.name,
      photo: req.body.photo,
      description: req.body.description,
      price: "$ " + req.body.price,
    }
    let coffees = fs.readFileSync('../database/coffees.json', 'utf-8');
    let coffeesJson = JSON.parse(coffees);
    coffeesJson.push(coffee);

    coffees = JSON.stringify(coffeesJson);
    fs.writeFileSync('../database/coffees.json', coffees);

    res.redirect("createEditProduct");
  },
};
