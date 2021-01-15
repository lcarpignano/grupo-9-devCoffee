// const users = require('../database/...');

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
};
