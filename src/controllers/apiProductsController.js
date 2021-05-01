const db = require('../../database/models');
const Op = db.Sequelize.Op;

const STATUS_SUCCESS = 'success'
const STATUS_ERROR = 'error'
const STATUS_NOT_FOUND = 'not_found'

module.exports = {
  getCatalog(req, res) {
    //return res.json('hola')
      db.Products.findAll()
          .then(products => {
              res
                  .status(200)
                  .json({ 
                      meta: {
                          totalProducts: products.length
                      },
                      data: products,
                      status: STATUS_SUCCESS
                  })
          })
          .catch(error => {
              res
                  .status(500)
                  .json({
                      status: STATUS_ERROR,
                      error,
                  })
          })
      
  },
  searchProduct (req, res) {
    db.Products.findAll({
      where: {
        name: { [Op.like]: '%' + req.query.keyword + '%' }
      }
    })
    .then(product => {
              
      if (product.length === 0) {
          return res.status(404)
          .json({
              status: STATUS_NOT_FOUND
          })
          
      }

      res.status(200)
          .json({
              data: product,
              status: STATUS_SUCCESS
          })
  })
  .catch(error => {
      res
          .status(500)
          .json({
              status: STATUS_ERROR,
              error,
          })
  })

  },
  getProduct(req, res) {
      const { id } = req.params

      db.Products.findByPk(id)/* , {
          include: 'category'
      }) */ 
      // Ver que tablas relacionadas hay que incluir
          .then(product => {
              
              if (!product) {
                  return res.status(404)
                  .json({
                      status: STATUS_NOT_FOUND
                  })
                  
              }

              res.status(200)
                  .json({
                      data: product,
                      status: STATUS_SUCCESS
                  })
          })
          .catch(error => {
              res
                  .status(500)
                  .json({
                      status: STATUS_ERROR,
                      error
                  })
          })
  },
  createProduct(req, res) {
      const body = req.body
      
      db.Products.create(body)
          .then(product => {
              res.status(201)
                  .json({
                      data: product,
                      status: STATUS_SUCCESS
                  })
          })
          .catch(error => {
              res
                  .status(500)
                  .json({
                      status: STATUS_ERROR,
                      error
                  })
          })
  },
  editProduct(req, res) {
      const body = req.body

      db.Products.update(body, {
          where: {
              id: req.params.id
          }
      })
          .then(() => {

              db.Products.findByPk(req.params.id)
                  .then(product => {
                      res.status(201)
                          .json({
                              data: product,
                              status: STATUS_SUCCESS
                          })
              })

          })  
  },
  destroyProduct(req, res) {
      db.Products.destroy({
          where: {
              id: req.params.id
          }
      })
          .then(() => {
              res.status(200)
                  .json({
                      status: STATUS_SUCCESS
                  })
          })
          .catch(error => {
              res
                  .status(500)
                  .json({
                      status: STATUS_ERROR,
                      error
                  })
          })
  }
};
