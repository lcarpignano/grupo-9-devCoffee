module.exports = (req, res, next) => {
	if (!req.session.userLogged.mail === "lushi@dh.com") {
		return res.redirect('/users/profile');
	}
	next();
}
