const fs = require('fs');
const path = require('path');
const jsonTable = require('../database/jasonTable');
const usersTable = jsonTable('users');
const { validationResult } = require('express-validator');
const session = require ('express-session');
const bcrypt = require('bcryptjs');

module.exports = {
  index: (req, res) => {
    let users = usersTable.all();
    res.render("users/index", { users });
  },
  register: (req, res) => {
    res.render("users/register");
  },
  store: (req, res) => {
    let errors = validationResult(req);
    
    if(errors.isEmpty()) {
      let user = req.body;
      if (req.file) {
        user.image = req.file.filename;
      } else {
        res.send('La imagen es obligatoria');
      }
      user.password = bcrypt.hashSync(user.password, 10)
      let userId = usersTable.create(user);
      
      res.redirect('/');
    
    }else {
      return res.render('users/register', { errors: errors.mapped(), oldData: req.body });
    }
    
  },
  
  edit: (req, res) => {
    let user = usersTable.find(req.params.id);

        res.render('users/edit', { user });
  },
  update: (req, res) => {
    let user = req.body;
    user.id = Number(req.params.id);

    // Si viene una imagen nueva la guardo
    if (req.file) {
        user.image = req.file.filename;
    // Si no viene una imagen nueva, busco en base la que ya había
    } else {
        oldUser = usersTable.find(user.id);
        user.image = oldUser.image;
    }

    let userId = usersTable.update(user);

    res.redirect('/users/' + userId);
  },
  destroy: (req, res) => {
    let users = usersTable.all()

        usersTable.delete(req.params.id);

        res.redirect('/users/index');
  },

  login: (req, res) => {
    res.render("users/login");
  },

  loginProcess: (req, res) => {
    
    // Validacion

    const user = usersTable.findByField('mail', req.body.mail)
    console.log(user);

    if (!user){
      return res.send('El usuario no existe')
    }

    if(!bcrypt.compareSync(req.body.password, user.password)){
      return res.send('El password no existe')
    }

    req.session.userLogged = true;

    res.redirect('/');

  },
};
