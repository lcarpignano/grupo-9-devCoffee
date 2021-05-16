const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");
const session = require("express-session");
const bcrypt = require("bcryptjs");
const db = require("../../database/models");
const fetch = require("node-fetch");

module.exports = {
  index: (req, res) => {
    db.Users.findAll().then((users) => {
      res.render("users/index", { users });
    });
  },
  register: async (req, res) => {
    let countries = await fetch(
      "https://restcountries.eu/rest/v2/regionalbloc/eu"
    ).then((response) => response.json());
    /* let cities = await fetch(
      "https://countriesnow.space/api/v0.1/countries"
    ).then((response) => response.json()); */

    req.session.countries = countries;

    res.render("users/register", { countries /* cities */ });
  },
  userRegister: (req, res) => {
    const errors = validationResult(req);
    const {
      first_name,
      last_name,
      username,
      mail,
      country,
      city,
      birth,
      address,
    } = req.body;
    const password = bcrypt.hashSync(req.body.password, 12);
    const photo = req.file ? req.file.filename : "default.png";

    console.log("req.file", req.file);

    if (errors.isEmpty()) {
      db.Users.create({
        first_name,
        last_name,
        username,
        mail,
        country,
        city,
        password,
        birth,
        address,
        photo,
      })
        .then((newUser) => {
          db.Users.findOne({ where: { mail: newUser.mail } }).then((user) => {
            req.session.userLogged = user;
            res.redirect("/users/profile");
          });
        })
        .catch((error) => console.log("Falló la creación del usuario", error));
    } else {
      return res.render("users/register", {
        errors: errors.mapped(),
        oldData: req.body,
        countries: req.session.countries,
      });
    }
  },

  edit: (req, res) => {
    const { id } = req.params;
    db.Users.findByPk(id).then((user) => {
      res.render("users/edit", { user });
    });
  },
  update: (req, res) => {
    const { first_name, last_name, username, mail, password, birth, address } =
      req.body;
    const { id } = req.params;

    db.Users.findByPk(id).then((user) => {
      const originalPhoto = user.photo;

      db.Users.update(
        {
          first_name,
          last_name,
          username,
          mail,
          password,
          birth,
          address,
          photo: req.file ? req.file.filename : originalPhoto,
        },
        {
          where: {
            id,
          },
        }
      )
        .then(() => {
          res.redirect("/users/profile");
        })
        .catch((err) => console.log(err));
    });
  },

  destroy: (req, res) => {
    db.Users.destroy({ where: { id: req.params.id } }).then(() => {
      res.redirect("/users/index");
    });
  },

  login: (req, res) => {
    res.render("users/login");
  },

  loginProcess: (req, res) => {
    db.Users.findOne({ where: { mail: req.body.mail } })
      .then((user) => {
        if (user) {
          if (bcrypt.compareSync(req.body.password, user.password)) {
            delete user.password;

            req.session.userLogged = user;

            if (req.body.remember) {
              res.cookie("userEmail", req.body.mail, { maxAge: 1000 * 60 });
            }
            return res.redirect("profile");
          }
        }
        res.render("users/login", {
          errors: {
            mail: {
              msg: "Las PASS es incorrecta",
            },
          },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  },

  profile: (req, res) => {
    return res.render("users/profile", {
      user: req.session.userLogged,
    });
  },

  logout: (req, res) => {
    res.clearCookie("userEmail");
    req.session.destroy();
    res.redirect("/");
  },
};
