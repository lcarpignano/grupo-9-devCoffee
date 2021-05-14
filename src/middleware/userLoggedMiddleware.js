const db = require("../../database/models");

module.exports = (req, res, next) => {
    res.locals.isLogged = false;

     let userFromCookie
     db.Users.findOne({ where: { mail: req.cookies.userEmail } })
      .then((user) => {
        userFromCookie = user
      }
      ).catch((error) => {
        console.log('No hay cookie');
      });

	if (userFromCookie) {
		req.session.userLogged = userFromCookie;
	}

    if(req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
        if(res.locals.userLogged.mail === "flor@dh.com"){
            res.locals.isAdmin = true;
        }
    }
    
    next();
}