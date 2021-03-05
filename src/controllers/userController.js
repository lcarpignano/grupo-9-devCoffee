const fs = require("fs");
const path = require("path");
const jsonTable = require("../database/jasonTable");
const usersTable = jsonTable("users");
const { validationResult } = require("express-validator");
const session = require("express-session");
const bcrypt = require("bcryptjs");

module.exports = {
  index: (req, res) => {
    let users = usersTable.all();
    res.render("users/index", { users });
  },
  register: (req, res) => {
    res.render("users/register");
  },
  userRegister: (req, res) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      let user = req.body;
      if (req.file) {
        user.photo = req.file.filename;
      } else {
        res.render("users/register", {
          errors: errors.mapped(),
          oldData: req.body,
        });
      }
      user.password = bcrypt.hashSync(user.password, 10);

      res.redirect("/users/login");
    } else {
      return res.render("users/register", {
        errors: errors.mapped(),
        oldData: req.body,
      });
    }
  },

  edit: (req, res) => {
    let user = usersTable.find(req.params.id);

    res.render("users/edit", { user });
  },
  update: (req, res) => {
    let user = req.body;
    user.id = Number(req.params.id);

    // Si viene una imagen nueva la guardo
    if (req.file) {
      user.photo = req.file.filename;
      // Si no viene una imagen nueva, busco en base la que ya había
    } else {
      oldUser = usersTable.find(user.id);
      user.photo = oldUser.photo;
    }

    let userId = usersTable.update(user);

    res.redirect("/users/" + userId);
  },
  destroy: (req, res) => {
    let users = usersTable.all();

    usersTable.delete(req.params.id);

    res.redirect("/users/index");
  },

  login: (req, res) => {
    res.render("users/login");
  },

  loginProcess: (req, res) => {
    // Validacion

    let user = usersTable.findByField("mail", req.body.mail);
    //console.log(user);

    if (!user) {
      return res.render("users/login", {
        errors: {
          mail: {
            msg: "Las credenciales son inválidas",
          },
        },
      });
    }

    if (!bcrypt.compareSync(req.body.password, user.password)) {
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

    if(req.body.remember) {
      res.cookie('userEmail', req.body.mail, { maxAge: (1000 * 60) })
    }

    res.redirect('profile');
  },

  profile: (req, res) => {
    return res.render('users/profile', {
			user: req.session.userLogged
		});
  },
  
  logout: (req, res) => {
    res.clearCookie('userEmail');
		req.session.destroy();
		res.redirect('/');
	}
};
