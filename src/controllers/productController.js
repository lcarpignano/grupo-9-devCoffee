const coffees = require('../database/coffees');

module.exports = {
  coffees: coffees,
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
    let product = {
      id: (coffees.length + 2),
      name: req.body.name,
      photo: req.body.photo,
      description: req.body.description,
      price: "$ " + req.body.price,
    }
    coffees.push(product);

    res.redirect("createEditProduct");
  },
};
