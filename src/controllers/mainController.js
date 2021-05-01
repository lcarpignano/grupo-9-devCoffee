const db = require('../../database/models');
const Op = db.Sequelize.Op;

const STATUS_SUCCESS = 'success'
const STATUS_ERROR = 'error'
const STATUS_NOT_FOUND = 'not_found'


module.exports = {
  index: (req, res) => {
    db.Products.findAll({
      where: { featured: true }
    })
    .then(featured => {
        res.render('index.ejs', { featured })
           /*  .status(200)
            .json({ 
                meta: {
                    totalProducts: products.length
                },
                data: featured,
                status: STATUS_SUCCESS 
            }) */
    })
    .catch(error => {
      console.log(error)
/*         res
            .status(500)
            .json({
                status: STATUS_ERROR,
                error,
            }) */
    })
  }
  
};
