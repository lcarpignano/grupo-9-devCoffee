const fs = require("fs");
const path = require('path');

let products = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/coffees.json'), 'utf-8'));


module.exports = {
  catalog: (req, res) => {
    res.render("products/catalog", { products });
  },
  create: (req, res) => {
    res.render("products/create");
  },
  show: (req, res) => {
    let product = products.find((product) => product.id == req.params.id);

    if (product) {
      res.render("products/detail", { product });
    } else {
      res.render("products/catalog");
    }
  },
  store: (req, res) => {
    let product = req.body;
    products.push(product);

    let productsJson = JSON.stringify(products, null, " ");
    fs.writeFileSync(jsonPath, productsJson);

    res.send(req.body);
  },
  edit: (req, res) => {
    let product = products.find((product) => product.id == req.params.id);

    res.render("products/edit", { product });
  },
  update: (req, res) => {
   let updatedProduct = req.body;
    updatedProduct.id = Number(req.params.id);

    let updatedProducts = products.map(product => {
        if (product.id == req.params.id) {
            return updatedProduct;
        } else {
            return product;
        }
    });

    let productsJson = JSON.stringify(updatedProducts, null, ' ');
    fs.writeFileSync(jsonPath, productsJson);
    
    res.redirect('/products/catalog');
},
destroy: (req, res) => {
  let updatedProducts = products.filter(product => product.id != req.params.id);

  let productsJson = JSON.stringify(updatedProducts, null, ' ');
  fs.writeFileSync(jsonPath, productsJson);

  res.redirect('/products/catalog');
},





  

  shoppingCart: (req, res) => {
    res.render("products/shoppingCart");
  }
};
