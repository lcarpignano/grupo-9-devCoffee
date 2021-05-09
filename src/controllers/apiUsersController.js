const db = require("../../database/models");
const Op = db.Sequelize.Op;

const STATUS_SUCCESS = "success";
const STATUS_ERROR = "error";
const STATUS_NOT_FOUND = "not_found";

module.exports = {
  index: (req, res) => {
    db.Users.findAll()
      .then((users) => {
        res.status(200).json({
          meta: {
            totalUsers: users.length,
          },
          data: users,
          status: STATUS_SUCCESS,
        });
      })
      .catch((error) => {
        res.status(500).json({
          status: STATUS_ERROR,
          error,
        });
      });
  },
};
