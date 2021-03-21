const fs = require("fs");
const path = require("path");
const db = require('../../database/models')


module.exports = {
  index: (req, res) => {
    db.Products.findAll({
      where: { featured: true }
    })
    .then( (featured) => {
      res.render("index", { featured })  
    })
  }
  
};
