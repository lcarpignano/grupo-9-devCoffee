const fs = require("fs");
const path = require('path');
const jsonPath = path.join(__dirname, '../database/coffees.json');
let products = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

module.exports = {
  catalog: (req, res) => {
    res.render("products/catalog", { products });
  },
  show: (req, res) => {
    let product = products.find((product) => product.id == req.params.id);
    if (product) {
      res.render("products/detail", { product });
    } else {
      res.render("products/catalog");
    }
  },
  create: (req, res) => {
    res.render("products/create");
  },
  store: (req, res) => {
    let product = req.body;
    products.push(product);
    
    fs.writeFileSync(jsonPath, JSON.stringify(products, null, " "));
    
    res.redirect('/products/catalog');
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
