const fs = require("fs");
const path = require("path");
const jsonTable = require("../database/jasonTable");
const productsTable = jsonTable("coffees");
const weightsTable = jsonTable("weights");
const grindsTable = jsonTable("grinds");
const highlightsTable = jsonTable("highlights");
const db = require("../../database/models");

module.exports = {
  catalog: (req, res) => {
    db.Products.findAll().then((products) =>
      res.render("products/catalog", { products })
    );
  },

  show: (req, res) => {
    let weights = weightsTable.all();
    let grinds = grindsTable.all();
    Promise.all([
      db.Products.findByPk(req.params.id),
      db.Products.findAll(),
      db.Products.findAll({
        where: {
          featured: true,
        },
      }),
    ]).then((promiseRes) => {
      const product = promiseRes[0];
      const products = promiseRes[1];
      const featured = promiseRes[2];
      console.log(product);
      console.log(featured);

      if (product) {
        res.render("products/detail", {
          product,
          featured,
          weights,
          grinds,
        });
      } else {
        res.render("products/catalog", { products });
      }
    });

    /* .then((product) =>
        res.render("products/detail", {
          product  , weights, grinds, featured */
  },

  /* let highlights = highlightsTable.all();
    let product = productsTable.find(req.params.id);
    if (product) {
      res.render("products/detail", { product, weights, grinds, featured });
    } else {
      res.render("products/catalog");
    } */

  create: (req, res) => {
    res.render("products/create");
  },

  store: (req, res) => {
    const { name, logo, description, price } = req.body;
    const photo = req.file.filename;

    db.Products.create({
      name,
      logo,
      description,
      price: Number(price),
      photo,
    })
      .then((newProduct) => {
        res.redirect("/products/catalog");
      })
      .catch((error) => {
        console.log("crear pagina de error de carga");
      });
  },

  edit: (req, res) => {
    db.Products.findByPk(req.params.id).then((product) => {
      res.render("products/edit", { product });
    });
  },

  update: (req, res) => {
    let product = req.body;
    if(req.file.filename){
      product.photo = req.file.filename;
    }
    



    const { name, logo, description, price } = req.body;
    let photo = req.file.filename;
    const id = Number(req.params.id);

    if (!photo) {
      db.Products.findByPk(id).then((product) => {
        photo = product.photo;
      });
    }
    db.Products.findByPk(id).then((product) => {
      product.update({
        name,
        logo,
        description,
        price,
        
      });
      res.redirect("/products/" + id);
    });
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
