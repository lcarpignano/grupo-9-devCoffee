const jsonTable = require('../database/jasonTable');
const usersTable = jsonTable("users");

module.exports = (req, res, next) => {
    res.locals.isLogged = false;

    let userFromCookie = usersTable.findByField('mail', req.cookies.userEmail);

	if (userFromCookie) {
		req.session.userLogged = userFromCookie;
	}

    if(req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }
    
    next();
}