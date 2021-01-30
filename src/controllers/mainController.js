const fs = require("fs");
const path = require("path");
const jsonTable = require("../database/jasonTable");
const highlightsTable = jsonTable("highlights");


module.exports = {
  index: (req, res) => {
    let highlights = highlightsTable.all();
    res.render("index", { highlights });
  }
  
};
