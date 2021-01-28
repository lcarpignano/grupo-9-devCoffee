const fs = require("fs");
const path = require("path");
const jsonTable = require("../database/jasonTable");
const productsTable = jsonTable("coffees");
const weightsTable = jsonTable("weights");
const grindsTable = jsonTable("grinds");

module.exports = {
  catalog: (req, res) => {
    let products = productsTable.all();
    res.render("products/catalog", { products });
  },

  show: (req, res) => {
    let weights = weightsTable.all();
    let grinds = grindsTable.all();
    let product = productsTable.find(req.params.id);
    if (product) {
      res.render("products/detail", { product, weights, grinds });
    } else {
      res.render("products/catalog");
    }
  },

  create: (req, res) => {
    res.render("products/create");
  },

  store: (req, res) => {
    let product = req.body;
    if (req.file) {
      product.photo = '/img/' + req.file.filename;
    } else {
      res.send("La imagen es obligatoria");
    }

    let productId = productsTable.create(product);

    res.redirect("/products/" + productId);
  },

  edit: (req, res) => {
    let product = productsTable.find(req.params.id);

    res.render("products/edit", { product });
  },

  update: (req, res) => {
    let product = req.body;
    product.id = Number(req.params.id);

    if (req.file) {
      product.photo = req.file.filename;
    } else {
      oldproduct = productsTable.find(product.id);
      product.photo = oldproduct.photo;
    }

    let productId = productsTable.update(product);

    res.redirect("/products/" + productId);
  },

  destroy: (req, res) => {
    let products = productsTable.all(); // Es necesaria esta variable?

    productsTable.delete(req.params.id);

    res.redirect("/products/catalog");
  },

  shoppingCart: (req, res) => {
    res.render("products/shoppingCart");
  },
};
