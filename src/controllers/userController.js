const fs = require("fs");
const path = require("path");
const jsonPath = path.join(__dirname, "../database/users.json");
let users = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));

module.exports = {
  register: (req, res) => {
    res.render("users/register");
  },
  store: (req, res) => {
    users.push(user);
    fs.writeFileSync(jsonPath, JSON.stringify(users, null, " "));

    res.send(req.body);
  },
  show: (req, res) => {
    let user = users.find((user) => user.id == req.params.id);

    if (user) {
      res.send(user);
    } else {
      res.send("No encontré el usuario");
    }
  },
  edit: (req, res) => {
    let user = users.find((user) => user.id == req.params.id);

    res.render('users/edit', { user });
  },
  update: (req, res) => {
    let updatedUser = req.body;
    updatedUser.id = Number(req.params.id);

    let updatedUsers = users.map((user) => {
      if (user.id == req.params.id) {
        return updatedUser;
      } else {
        return user;
      }
    });

    let usersJson = JSON.stringify(updatedUsers, null, " ");
    fs.writeFileSync(jsonPath, usersJson);

    res.send(user);
  },
  destroy: (req, res) => {
    let updatedUsers = users.filter((user) => user.id != req.params.id);

    let usersJson = JSON.stringify(updatedUsers, null, " ");
    fs.writeFileSync(jsonPath, usersJson);

    res.send(user);
  },

  login: (req, res) => {
    res.render("users/login");
  },
};
