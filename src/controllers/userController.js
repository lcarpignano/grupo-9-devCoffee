const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");
const session = require("express-session");
const bcrypt = require("bcryptjs");
const db = require("../../database/models");

module.exports = {
  index: (req, res) => {
    db.Users.findAll().then((users) => res.render("users/index", { users }));
  },
  register: (req, res) => {

    // API
/*     const countries = await fetch('https://restcountries.eu/rest/v2/regionalbloc/eu')
      .then(response => response.json()); */

    res.render("users/register");
  },
  userRegister: (req, res) => {
    const errors = validationResult(req);
    const { first_name, last_name, username, mail, country, city, birth, address } = req.body;
    const password = bcrypt.hashSync(req.body.password, 10);
    console.log('POR AQUI');
    const photo = /* req.file.filename ? req.file.filename :  */'default.png';

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
          console.log("se creó el producto", newUser);
          db.Users.findOne({ where: { mail: req.body.mail } }).then((user) => {
            req.session.userLogged = user;
            res.redirect("/users/profile", { user });
          });
        })
        .catch((error) => console.log("Falló la creación del producto", error));
    } else {
      return res.render("users/register", {
        errors: errors.mapped(),
        oldData: req.body,
      });
    }
  },

  edit: (req, res) => {
    db.Users.findByPk(req.params.id).then((user) => {
      console.log(user)
      res.render("users/edit", { user })}
      
    );
  },
  update: (req, res) => {
    let user = req.body;
    user.id = Number(req.params.id);

    db.Users.findByPk(user.id).then((user) => {
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
            id: user.id,
          },
        }
      )
        .then(() => {
          res.redirect("/users/" + user.id);
        })
        .catch((err) => console.log(err));
    });

    /*  // Si viene una imagen nueva la guardo
    if (req.file) {
      user.photo = req.file.filename;
      // Si no viene una imagen nueva, busco en base la que ya había
    } /*  else {
      oldUser = usersTable.find(user.id);
      user.photo = oldUser.photo;
    } 

    let userId = usersTable.update(user);

    res.redirect("/users/" + userId); */
  },

  destroy: (req, res) => {
    db.Users.destroy({ where: { id: req.params.id } }).then(() => {
      res.redirect("/users/index");
    });
    /* let users = usersTable.all();

    usersTable.delete(req.params.id); */
  },

  login: (req, res) => {
    res.render("users/login");
  },

  loginProcess: (req, res) => {
    db.Users.findOne({ where: { mail: req.body.mail } }).then((user) => {
      if (!user) {
        return res.render("users/login", {
          errors: {
            mail: {
              msg: "Las credenciales son inválidas",
            },
          },
        });
      }

      if (!bcrypt.compare(req.body.password, user.password)) {
        return res.render("users/login", {
          errors: {
            mail: {
              msg: "Las credenciales son inválidas",
            },
          },
        });
      }

      delete user.password;
      req.session.userLogged = user;

      if (req.body.remember) {
        res.cookie("userEmail", req.body.mail, { maxAge: 1000 * 60 });
      }

      res.redirect("profile");
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
